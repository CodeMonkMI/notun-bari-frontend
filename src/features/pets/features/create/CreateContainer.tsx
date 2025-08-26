import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCategories } from "@/lib/api/categories";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { CreateForm } from "./components/CreateForm";

export function CreateContainer() {
  const navigate = useNavigate();
  const { data, isPending, isError } = useCategories();
  if (isPending) {
    return <h2>Loading</h2>;
  }

  if (isError) return <h2>Failed to fetch data</h2>;

  const categories = Array.isArray(data) ? data : data?.results;
  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Entry a new Pet</CardTitle>
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
              <CreateForm categories={categories} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
