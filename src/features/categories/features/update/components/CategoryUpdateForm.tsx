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
import type { Category } from "@/lib/api/categories";
import { useCategoryUpdate } from "@/lib/api/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export function CategoryUpdateForm({ category }: { category: Category }) {
  const navigate = useNavigate();
  const { mutateAsync: updateCategory, isPending } = useCategoryUpdate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  });

  const { setValue } = form;

  useEffect(() => {
    if (category) setValue("name", category.name);
  }, [category, setValue]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateCategory(
        { id: category.id, data: values },
        {
          onSuccess() {
            form.reset();
            navigate("/dashboard/categories");
            toast("Category updated successfully!");
          },
        }
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to update category.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter category name"
                  type="text"
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
            onClick={() => form.reset()}
            type="button"
          >
            Reset
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading" : "Update"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CategoryUpdateForm;
