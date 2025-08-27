import { Skeleton } from "@/components/ui/skeleton";
import { usePets } from "@/lib/api/pets";
import { Link } from "react-router";
import { PetCard } from "../../../../components/PetCard";

const Pets = () => {
  const {
    data: pets,
    isPending,
    isError,
  } = usePets({
    limit: 4,
    page: 1,
  });

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map(() => (
          <Skeleton className=" h-72 " />
        ))}
      </div>
    );
  }
  if (isError) {
    return <>Error fetching data</>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pets?.results.slice(0, 4).map((pet, i) => (
          <Link to={`/pets/${pet.id}`} key={i}>
            <PetCard
              name={pet.name}
              price={pet.fees || 0}
              image="https://images.pexels.com/photos/544502/pexels-photo-544502.jpeg"
              category={pet.category_name}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Pets;
