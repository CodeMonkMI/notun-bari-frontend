import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMe } from "@/lib/api/auth";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { UpdateForm } from "./components/UpdateForm";

export function UpdateContainer() {
  const navigate = useNavigate();

  const { data: me, isPending, isError } = useMe();

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error fetching data</h2>;
  }

  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Update Profile</CardTitle>
              <CardDescription>
                Enter user information to update
              </CardDescription>
              <CardAction>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    navigate("/dashboard/profile");
                  }}
                >
                  <IconArrowLeft />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <UpdateForm
                data={{
                  email: me?.email || "",
                  first_name: me?.first_name || "",
                  last_name: me?.last_name || "",
                  username: me?.username || "",
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
