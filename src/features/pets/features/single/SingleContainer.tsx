import { usePet } from "@/lib/api/pets/pets";
import { useParams } from "react-router";
import { PetDetails } from "./components/PetDetails";

export function SingleContainer() {
  const params = useParams();
  const { isPending, isError, data: pet } = usePet(params.id as string);

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <h2>Loading...</h2>;

  return (
    <div className="font-sans text-gray-800">
      <PetDetails pet={pet} />
    </div>
  );
}
