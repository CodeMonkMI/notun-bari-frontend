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
import { useUser } from "@/lib/api/users/users";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import UserUpdateForm from "./components/UserUpdateForm";

export function UserUpdateContainer() {
  const navigate = useNavigate();
  const params = useParams();
  const { isPending, data: user, isError } = useUser(params.id as string);

  if (isPending) {
    return <UpdateUserFormSkeleton />;
  }
  if (isError) {
    return <h2>Error</h2>;
  }
  return (
    <div className="font-sans text-gray-800">
      <div className="">
        <div className="sm:w-3/4 lg:w-96 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Update users account details</CardTitle>
              <CardDescription>
                Enter user information to create your account
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
            <CardContent>{user && <UserUpdateForm user={user} />}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function UpdateUserFormSkeleton() {
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
        {/* First Name */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" /> {/* label */}
          <Skeleton className="h-9 w-full rounded-md" /> {/* input */}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Username */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Skeleton className="h-9 w-20 rounded-md" /> {/* Reset */}
        <Skeleton className="h-9 w-20 rounded-md" /> {/* Submit */}
      </div>
    </div>
  );
}
