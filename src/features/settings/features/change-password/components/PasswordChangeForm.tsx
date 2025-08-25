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
import { useSetPassword } from "@/lib/api/auth/password";
import type { ValidationErrors } from "@/lib/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const passwordSchema = z
  .object({
    current_password: z.string().min(1, "Current password is required"),
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string().min(8, "Please confirm your new password"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export function PasswordChangeForm() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const navigate = useNavigate();

  const {
    mutateAsync: setPassword,
    isError,
    error,
    isSuccess,
    isPending,
  } = useSetPassword();
  async function onSubmit(values: PasswordFormValues) {
    try {
      await setPassword(values);
    } catch (error) {
      console.error("Form submission error", error);
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
      navigate("/dashboard/profile");
    }
  }, [navigate, isSuccess, form]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Current Password */}
          <FormField
            control={form.control}
            name="current_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isPending ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </Form>
    </>
  );
}
