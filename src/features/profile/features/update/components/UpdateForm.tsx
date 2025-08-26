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
import { useAuthUserUpdate } from "@/lib/api/auth/update";
import type { ValidationErrors } from "@/lib/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const profileSchema = z.object({
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function UpdateForm({ data }: { data: ProfileFormValues }) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
    },
  });
  const navigate = useNavigate();
  const formReset = useCallback(() => {
    form.reset(data);
  }, [form, data]);

  useEffect(() => {
    formReset();
  }, [formReset]);

  const {
    mutateAsync: update,
    isError,
    error,
    isSuccess,
    isPending,
  } = useAuthUserUpdate();

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      await update(data);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

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
      navigate("/dashboard/profile");
      toast("User profile data updated successfully!");
    }
  }, [navigate, isSuccess, form]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-x-2">
            <Button
              type="submit"
              className="w-min"
              variant={"destructive"}
              onClick={formReset}
            >
              Reset
            </Button>
            <Button type="submit" className="w-min">
              {isPending ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default UpdateForm;
