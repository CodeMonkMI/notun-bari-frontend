import { Button } from "@/components/ui/button";
import { usePet } from "@/lib/api/pets/pets";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import { PetDetails } from "./components/PetDetails";

export function SingleContainer() {
  const params = useParams();
  const { isPending, isError, data: pet } = usePet(params.id as string);
  const navigate = useNavigate();

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <h2>Loading...</h2>;

  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-end px-4 lg:px-6 mb-3">
        <Button
          variant={"secondary"}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconArrowLeft />
        </Button>
      </div>
      <PetDetails pet={pet} />
    </div>
  );
}
