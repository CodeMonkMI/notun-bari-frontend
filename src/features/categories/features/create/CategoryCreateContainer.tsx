import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import UserCreateForm from "./components/CategoryCreateForm";

export function CreateContainer() {
  const navigate = useNavigate();
  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Create a new category</CardTitle>
              <CardDescription>Enter a suitable name</CardDescription>
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
              <UserCreateForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
