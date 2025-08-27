import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdoptionCreate } from "@/lib/api/adoptions";
import { useMe } from "@/lib/api/auth";
import type { ValidationErrors } from "@/lib/api/types";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

const AdoptButton: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    mutateAsync: createAdoption,
    isPending,
    isError,
    error,
  } = useAdoptionCreate();
  useEffect(() => {
    if (isError) {
      if (axios.isAxiosError(error)) {
        const errs: ValidationErrors = error.response?.data;
        if (errs.non_field_errors) {
          toast(errs.non_field_errors);
          return;
        }
        if (errs.details) {
          toast(errs.details as unknown as string);
          return;
        }
        toast(
          "This pet is already adopted or Something went wrong please try again later"
        );
      }
    }
  }, [error, isError]);

  const { data: me, isPending: isMePending } = useMe();

  if (isMePending) return <Skeleton className="w-32 h-10" />;

  if (me?.is_staff) {
    return (
      <p className="text-destructive font-bold">
        You can't adopt pet from here. Go to dashboard to do such actions
      </p>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Button
          className="uppercase bg-orange-500 hover:bg-orange-600 cursor-pointer"
          onClick={() => {
            createAdoption(
              { pet: id! },
              {
                onSuccess() {
                  toast("Pet adaptions successful!");
                },
              }
            );
          }}
        >
          {isPending ? "Loading..." : "Adopt Now"}
        </Button>
      </div>
    </div>
  );
};

export default AdoptButton;
