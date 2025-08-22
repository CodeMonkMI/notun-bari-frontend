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
import { useCategory } from "@/lib/api/categories";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import CategoryUpdateForm from "./components/CategoryUpdateForm";

export function UpdateContainer() {
  const navigate = useNavigate();
  const params = useParams();
  const {
    isPending,
    data: category,
    isError,
  } = useCategory(params.id as string);

  if (isPending) {
    return <UpdateCategoryFormSkeleton />;
  }
  if (isError) {
    return <h2>Error fetching category</h2>;
  }

  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Update category</CardTitle>
              <CardDescription>Edit the category name below.</CardDescription>
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
              {category && <CategoryUpdateForm category={category} />}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function UpdateCategoryFormSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto rounded-lg border bg-card p-6 shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-48" /> {/* title */}
          <Skeleton className="h-4 w-64" /> {/* subtitle */}
        </div>
        <Skeleton className="h-8 w-8 rounded-md" /> {/* back button */}
      </div>

      <div className="space-y-6">
        {/* Category Name */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" /> {/* label */}
          <Skeleton className="h-9 w-full rounded-md" /> {/* input */}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Skeleton className="h-9 w-20 rounded-md" /> {/* Reset */}
        <Skeleton className="h-9 w-20 rounded-md" /> {/* Update */}
      </div>
    </div>
  );
}
