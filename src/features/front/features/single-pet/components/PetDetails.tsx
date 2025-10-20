import default_pet from "@/assets/default_pet.jpeg";
import { Skeleton } from "@/components/ui/skeleton";
import { usePet } from "@/lib/api/pets";
import { useAuthContext } from "@/store/authStore";
import { getDefaultPetImage, type Category } from "@/utils/getDefaultPetImage";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import AdoptButton from "./AdoptButton";
export function PetDetails() {
  const { isAuthenticated } = useAuthContext();

  const { id } = useParams<{ id: string }>();

  const { data: petData, isError, error, isPending } = usePet(id!);

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      if (axios.isAxiosError(error)) {
        if (error.status === 404) navigate("/not-found");
      }
    }
  }, [isError, error, navigate]);

  if (isPending) {
    return <PetDetailsSkeleton />;
  }

  if (isError) return <h2>Error fetching data</h2>;

  const {
    name,
    category_name,
    description,
    breed,
    age,
    owner,
    fees,
    image = default_pet,
  } = petData!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {/* Image */}

      <div className="w-full h-[500px] overflow-hidden">
        <img
          src={image ?? getDefaultPetImage(category_name as Category)}
          alt={name}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <h3 className="text-base font-bold text-gray-800 mb-2">
          {category_name}
        </h3>

        {/* Descriptions */}
        <div className="space-y-2 mb-4">
          <p className="text-gray-600">{description}</p>
        </div>

        <p className="text-sm text-gray-500">
          <b>Breed:</b> {breed}
        </p>
        <p className="text-sm text-gray-500">
          <b>Age:</b> {age}
        </p>
        <p className="text-sm text-gray-500">
          <b>Owner:</b> {owner.first_name} {owner.last_name}
        </p>

        <p className="text-xl text-orange-500 font-semibold mb-6">
          ${Number(fees).toFixed(2)}
        </p>
        {isAuthenticated && petData.status !== "adopted" && <AdoptButton />}
        {!isAuthenticated && (
          <p>
            <Link
              to={"/auth/login"}
              className="text-blue-400 underline underline-offset-4"
            >
              Login
            </Link>{" "}
            to adopt this pet
          </p>
        )}
      </div>
    </div>
  );
}

function PetDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {/* Image Skeleton */}
      <div>
        <Skeleton className="w-full h-80 rounded-lg" />
      </div>

      {/* Info Skeleton */}
      <div className="space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-24" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Breed, Age, Owner */}
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-28" />

        {/* Price */}
        <Skeleton className="h-6 w-20" />

        {/* Button */}
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
    </div>
  );
}
