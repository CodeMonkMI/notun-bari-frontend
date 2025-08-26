import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePets } from "@/lib/api/pets";

export const AdoptedPetCard = () => {
  const {
    data: users,
    isPending,
    isError,
  } = usePets({ filter: "adopted", limit: 0 });

  if (isError) return <h2> Error fetching data!</h2>;
  if (isPending) {
    return (
      <div>
        {Array.from({ length: 8 }).map(() => (
          <Skeleton key={Math.random()} className="w-full h-10 mb-2" />
        ))}
      </div>
    );
  }

  return (
    <>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>My Adopted Pets</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {Array.isArray(users) ? users.length : users.count ?? 0}
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
};

export default AdoptedPetCard;
