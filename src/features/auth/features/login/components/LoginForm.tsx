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
import { useLogin } from "@/lib/api/auth";
import { authToken } from "@/lib/token/AuthToken";
import { useAuthContext } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { setUser } = useAuthContext();

  const [serverError, setServerError] = useState<string>("");

  const navigate = useNavigate();

  const {
    mutateAsync: login,
    isError,
    error,
    isSuccess,
    isPending,
  } = useLogin();

  const { handleSubmit, control, reset } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setServerError("");
      await login(values);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

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
      const user = authToken.decode();
      setUser(user);
      reset();
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, isSuccess, reset]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full mx-auto "
      >
        {serverError && (
          <div className="text-red-500 font-semibold">{serverError}</div>
        )}
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter you password"
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
