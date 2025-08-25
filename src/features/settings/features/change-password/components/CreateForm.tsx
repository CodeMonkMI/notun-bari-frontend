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
import { usePaymentCreate } from "@/lib/api/payments";
import type { ValidationErrors } from "@/lib/api/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  amount: z.coerce.number().min(1, "Amount is required"),
});

export function PaymentCreateForm() {
  const {
    mutateAsync: createPayment,

    isError,
    error,
    isPending,
  } = usePaymentCreate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createPayment(values, {
        onSuccess: ({ url }) => {
          window.location = url as any;
        },
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit payment. Please try again.");
    }
  }

  useEffect(() => {
    if (isError && error instanceof AxiosError) {
      const errs: ValidationErrors = error.response?.data;
      if (errs && Object.keys(errs).length > 0) {
        for (const key in errs) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          form.setError(key as any, { message: errs[key]?.[0] as string });
        }
      }
    }
  }, [error, isError, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter amount"
                  type="number"
                  step="0.01"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-x-2">
          <Button
            variant="destructive"
            type="button"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PaymentCreateForm;
