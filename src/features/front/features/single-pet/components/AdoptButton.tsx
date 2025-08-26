import { Button } from "@/components/ui/button";
import { useAdoptionCreate } from "@/lib/api/adoptions";
import type { ValidationErrors } from "@/lib/api/types";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

type Props = {
  setServerErrors: React.Dispatch<React.SetStateAction<string[]>>;
};

const AdoptButton: React.FC<Props> = ({ setServerErrors }) => {
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
          setServerErrors(errs.non_field_errors);
        }
        if (errs.details) {
          setServerErrors([errs.details as unknown as string]);
        }
      }
    }
  }, [error, isError, setServerErrors]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Button
          className="uppercase bg-orange-500 hover:bg-orange-600 cursor-pointer"
          onClick={() => {
            createAdoption({ pet: id! });
          }}
        >
          {isPending ? "Loading..." : "Adopt Now"}
        </Button>
      </div>
    </div>
  );
};

export default AdoptButton;
