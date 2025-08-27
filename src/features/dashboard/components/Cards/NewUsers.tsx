import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/lib/api/users";

export const NewUsers = () => {
  const { data: users, isPending, isError } = useUsers();

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
          <CardDescription>Total Users</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {users?.length}
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
};

export default NewUsers;
