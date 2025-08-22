import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Pet } from "@/lib/api/pets";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { PetAdoptions } from "./PetAdoptions";
import { PetReviews } from "./PetReviews";

export function PetDetails({ pet }: { pet: Pet }) {
  const navigate = useNavigate();
  return (
    <div>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 dark:text-white">
        <Card className="lg:col-span-1 shadow-lg rounded-2xl overflow-hidden">
          <img
            src={`https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg`} // placeholder avatar
            alt={pet.name}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {pet.name}
              </h1>
              <p className="text-sm text-gray-500">
                {pet.category_name} • {pet.age} years • {pet.visibility}
              </p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Breed:</span> {pet.breed || "N/A"}
              </p>
              <p>
                <span className="font-medium">Fees:</span> ${pet.fees}
              </p>
              <p>
                <span className="font-medium">Owner:</span>{" "}
                {pet.owner.first_name} {pet.owner.last_name}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">About {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">
                {pet.description || "No description available."}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Adoptions</h2>
              <PetAdoptions petId={pet.id} />
            </CardContent>
          </Card>

          <Card className="shadow rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Reviews</h2>
              <PetReviews petId={pet.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
