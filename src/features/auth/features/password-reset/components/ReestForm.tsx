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
import { useResetPassword } from "@/lib/api/auth/password";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

// Zod Schema for password reset validation
const resetPasswordSchema = z.object({
  email: z.string().min(1, "This field is required!"),
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetForm() {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const [serverError, setServerError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const {
    mutateAsync: resetPassword,
    isError,
    error,
    isSuccess,
    isPending,
  } = useResetPassword();

  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      setServerError("");
      await resetPassword(data.email);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  useEffect(() => {
    if (isError) {
      if (error instanceof AxiosError) {
        const errs: string = error.response?.data.detail;
        setServerError(errs);
      }
    }
  }, [error, isError, form]);

  useEffect(() => {
    if (isSuccess) {
      setMessage(
        "We have send you an email with reset instruction.  Please  check your email. "
      );
      form.reset();
    }
  }, [navigate, isSuccess, form]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* New Password */}
          {serverError && (
            <div className="text-red-500 font-semibold">{serverError}</div>
          )}
          {message && (
            <div className="text-green-500 font-semibold">{message}</div>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isPending ? "Resetting.." : "Reset Password"}
          </Button>
        </form>
      </Form>
    </>
  );
}
