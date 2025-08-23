import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePets } from "@/lib/api/pets";
import { useUsers } from "@/lib/api/users";
import { IconArrowLeft } from "@tabler/icons-react";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { AdoptionCreateForm } from "./components/CreateForm";

export function CreateContainer() {
  const navigate = useNavigate();
  const { data: users, isPending, isError } = useUsers();
  const {
    data: pets,
    isPending: isPetPending,
    isError: isPetError,
  } = usePets(1, 10, "", "status=approved");

  const filteredUser = useMemo(() => {
    return users?.filter((user) => user.is_active) || [];
  }, [users]);

  if (isPending || isPetPending) {
    return <h2>Loading</h2>;
  }
  if (isError) return <h2>Failed to fetch user data</h2>;
  if (isPetError) return <h2>Failed to fetch pet data</h2>;

  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Request a pet adoptions</CardTitle>
              <CardDescription>
                Enter pet information for adoptions
              </CardDescription>
              <CardAction>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <IconArrowLeft />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <AdoptionCreateForm users={filteredUser} pets={pets.results} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
