import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePets } from "@/lib/api/pets";
import { useUsers } from "@/lib/api/users";
import { IconArrowLeft } from "@tabler/icons-react";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { AdoptionCreateForm } from "./components/CreateForm";

export function CreateContainer() {
  const navigate = useNavigate();
  const { data: users, isPending, isError } = useUsers();
  const { data, isPending: isPetPending, isError: isPetError } = usePets();

  const filteredUser = useMemo(() => {
    return users?.filter((user) => user.is_active) || [];
  }, [users]);

  if (isPending || isPetPending) {
    return (
      <div className="sm:w-3/4 lg:w-96 mx-auto">
        <Skeleton className="w-full h-60" />
      </div>
    );
  }
  if (isError) return <h2>Failed to fetch user data</h2>;
  if (isPetError) return <h2>Failed to fetch pet data</h2>;

  const pets = Array.isArray(data) ? data : data.results;

  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Adopt a pet</CardTitle>
              <CardDescription>Select a to adopt</CardDescription>
              <CardAction>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    navigate("/dashboard/adoptions");
                  }}
                >
                  <IconArrowLeft />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <AdoptionCreateForm users={filteredUser} pets={pets} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
