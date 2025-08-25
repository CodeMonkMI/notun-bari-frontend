"use client";

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
import { useResetPasswordConfirm } from "@/lib/api/auth/password";
import type { ValidationErrors } from "@/lib/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";

// Zod Schema for password reset validation
const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordConfirmFormValues = z.infer<typeof resetPasswordSchema>;
type UrlParma = {
  uid: string;
  token: string;
};

export function ResetForm() {
  const { uid = "", token = "" } = useParams<UrlParma>();
  const form = useForm<ResetPasswordConfirmFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [serverError, setServerError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const {
    mutateAsync: resetPasswordConfirm,
    isError,
    error,
    isSuccess,
    isPending,
  } = useResetPasswordConfirm();

  const onSubmit = async (data: ResetPasswordConfirmFormValues) => {
    try {
      setServerError("");
      setMessage("");
      await resetPasswordConfirm({
        new_password: data.password,
        uid,
        token,
      });
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
      setMessage(
        "Password is being updated. Redirecting to login in page in 3s"
      );
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }, [navigate, isSuccess, form]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {serverError && (
            <div className="text-red-500 font-semibold">{serverError}</div>
          )}
          {message && (
            <div className="text-green-500 font-semibold">{message}</div>
          )}
          <FormField
            control={form.control}
            name="password"
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isPending ? "Updating.." : "Update Password"}
          </Button>
        </form>
      </Form>
    </>
  );
}
