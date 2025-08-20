import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/lib/api/auth";
import type { ValidationErrors } from "@/lib/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z
  .object({
    first_name: z
      .string({ message: "This field is required!" })
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be at most 50 characters")
      .regex(/^[A-Za-z]+$/, "First name can only contain letters"),

    last_name: z
      .string({ message: "This field is required!" })
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be at most 50 characters")
      .regex(/^[A-Za-z]+$/, "Last name can only contain letters"),

    email: z
      .string({ message: "This field is required!" })
      .email("Email address must be valid!"),

    username: z
      .string({ message: "This field is required!" })
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),

    password: z
      .string({ message: "This field is required!" })
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be at most 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      ),

    confirm_password: z
      .string({ message: "This field is required!" })
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

export function RegistrationForm() {
  const navigate = useNavigate();

  const {
    mutateAsync: register,
    isError,
    error,
    isSuccess,
    isPending,
  } = useRegister();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await register(values);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  useEffect(() => {
    if (isError) {
      if (error instanceof AxiosError) {
        const errs: ValidationErrors = error.response?.data;
        if (Object.keys(errs).length > 0) {
          for (const key in errs) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            form.setError(key as any, { message: errs[key]?.[0] as string });
          }
        }
      }
    }
  }, [error, isError, form]);

  useEffect(() => {
    if (isSuccess) {
      form.reset();
      navigate("/auth/login");
    }
  }, [navigate, isSuccess, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter you first name"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm your password"
                  type="password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Loading" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
