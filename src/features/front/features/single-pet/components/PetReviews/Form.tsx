import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { usePetReviewCreate } from "@/lib/api/reviews";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { z } from "zod";

const reviewSchema = z.object({
  comments: z.string().min(1, "Review cannot be blank"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

export function ReviewForm() {
  const { id: petId } = useParams<{ id: string }>();
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      comments: "",
    },
  });

  const createReview = usePetReviewCreate(petId!);

  const onSubmit = async (values: ReviewFormValues) => {
    createReview.mutate(values, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        const errors = err?.response?.data;

        if (errors?.comments) {
          form.setError("comments", {
            type: "server",
            message: errors.comments.join(" "),
          });
        }
        if (errors?.non_field_errors) {
          form.setError("root", {
            type: "server",
            message: errors.non_field_errors.join(" "),
          });
        }
      },
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {form.formState.errors.root && (
          <p className="text-sm text-red-500">
            {form.formState.errors.root.message}
          </p>
        )}
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your review *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your review..."
                  className="mt-1"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600"
          disabled={createReview.isPending}
        >
          {createReview.isPending ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>
    </Form>
  );
}
