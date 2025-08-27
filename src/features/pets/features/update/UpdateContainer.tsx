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
import { useMe } from "@/lib/api/auth";
import { usePet } from "@/lib/api/pets";
import { useAuthContext } from "@/store/authStore";
import { IconArrowLeft } from "@tabler/icons-react";
import { Navigate, useNavigate, useParams } from "react-router";
import { UpdateForm } from "./components/UpdateForm";

export function UpdateContainer() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isPending, data: pet, isError } = usePet(id!);
  const { data: me, isPending: isMePending, isSuccess: isMeSuccess } = useMe();
  const { user } = useAuthContext();
  if (isPending || isMePending) {
    return <UpdateCategoryFormSkeleton />;
  }
  if (isError) {
    return <h2>Error fetching pet data</h2>;
  }

  if (!me?.is_staff && user.user_id !== pet.owner.id) {
    return <Navigate to="/dashboard/not-authorized" />;
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
            <CardContent>{pet && <UpdateForm pet={pet} />}</CardContent>
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
