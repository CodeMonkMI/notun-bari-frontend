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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/lib/api/categories";
import type { Pet } from "@/lib/api/pets";
import { usePetUpdate } from "@/lib/api/pets";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  category: z.string(),
  fees: z.number(),
  breed: z.string().optional(),
  age: z.number(),
  visibility: z.enum(["public", "private"]),
});

export function UpdateForm({ pet }: { pet: Pet }) {
  const navigate = useNavigate();
  const { mutateAsync: updatePet, isPending } = usePetUpdate();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      fees: 0,
      breed: "",
      age: 0,
      visibility: "public",
    },
  });

  useEffect(() => {
    if (pet) {
      form.reset({
        ...pet,
        category: String(pet.category),
      });
    }
  }, [pet, form]);

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      await updatePet({ id: pet.id, data: values });
      toast.success("Pet updated");
      navigate("/dashboard/pets");
    } catch {
      toast.error("Failed to update pet");
    }
  }

  const {
    data: categories,
    isPending: categoryIsPending,
    isError,
  } = useCategories(1);
  if (categoryIsPending) {
    return <h2>Loading</h2>;
  }
  if (isError) return <h2>Failed to fetch data</h2>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {categories?.results.map((cat) => (
                      <SelectItem
                        className="w-full"
                        key={cat.id}
                        value={cat.id}
                      >
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Breed</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fees</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visibility"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {[
                      ["Public", "public"],
                      ["Private", "private"],
                    ].map(([label, value]) => (
                      <SelectItem className="w-full" key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
            {isPending ? "Loading..." : "Update"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
