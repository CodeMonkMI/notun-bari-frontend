import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdoptionCreate } from "@/lib/api/adoptions";
import { useMe } from "@/lib/api/auth";
import type { Pet } from "@/lib/api/pets";
import type { ValidationErrors } from "@/lib/api/types";
import type { SingleUser } from "@/lib/api/users";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  pet: z.string({ message: "Select a pet" }),
  adopted_by: z.string({ message: "Select a user" }).optional(),
});

type Props = {
  pets?: Pet[];
  users?: SingleUser[];
};

export function AdoptionCreateForm(props: Props) {
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const { pets = [], users = [] } = props;
  const navigate = useNavigate();
  const {
    mutateAsync: createAdoption,
    isPending,
    isError,
    error,
  } = useAdoptionCreate();

  const { data: me, isPending: isMePending } = useMe();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      pet: "",
      adopted_by: "",
    },
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    setServerErrors([]);
    try {
      await createAdoption(values);
      toast.success("Adoption created");
      form.reset();
      navigate("/dashboard/adoptions");
    } catch {
      toast.error("Failed to create adoption");
    }
  }

  useEffect(() => {
    if (isError) {
      if (error instanceof AxiosError) {
        const errs: ValidationErrors = error.response?.data;
        if (errs.non_field_errors) {
          setServerErrors(errs.non_field_errors);
        }
        if (errs.details) {
          setServerErrors([errs.details as unknown as string]);
        }
        if (Object.keys(errs).length > 0) {
          for (const key in errs) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            form.setError(key as any, { message: errs[key]?.[0] as string });
          }
        }
      }
    }
  }, [error, isError, form]);

  if (isMePending) {
    return <h2>Loading...</h2>;
  }

  return (
    <Form {...form}>
      {serverErrors && (
        <div className="mb-3">
          {serverErrors.map((msg) => (
            <p
              data-slot="form-message"
              className={cn("text-destructive text-sm")}
              key={Math.random()}
            >
              {msg}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Pet select */}
        <FormField
          control={form.control}
          name="pet"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Pet</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a pet" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {pets.map((pet) => (
                      <SelectItem
                        className="w-full"
                        key={pet.id}
                        value={pet.id}
                      >
                        {pet.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* User select */}
        {me && me.is_staff && (
          <FormField
            control={form.control}
            name="adopted_by"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>User</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {users.map((u) => (
                        <SelectItem className="w-full" key={u.id} value={u.id}>
                          {u.email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex gap-x-2">
          <Button
            variant="destructive"
            onClick={() => form.reset()}
            type="button"
          >
            Reset
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Create Adoption"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
