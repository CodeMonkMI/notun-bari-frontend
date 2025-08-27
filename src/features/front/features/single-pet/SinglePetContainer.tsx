import { PetDetails } from "./components/PetDetails";
import { PetReviews } from "./components/PetReviews";

export function SinglePetContainer() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PetDetails />
      <PetReviews />
    </div>
  );
}
