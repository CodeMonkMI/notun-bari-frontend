import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useMe } from "@/lib/api/auth";
import { Menu } from "./Menu";

export const Profile = () => {
  const { data: user, isPending, isError } = useMe();
  if (isPending) {
    return (
      <div className="flex items-center">
        <Skeleton className="h-16 w-full rounded-md" />
      </div>
    );
  }
  if (isError) return null;
  return (
    <div>
      <Card className="shadow-lg rounded-2xl lg:col-span-1">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarFallback>
              {user?.first_name[0]}
              {user?.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">
            {user?.first_name} {user?.last_name}
          </CardTitle>
          <p className="text-sm text-gray-500">@{user?.username}</p>
          <div className="flex gap-2 mt-2">
            {user?.is_active ? (
              <Badge className="bg-green-600">Active</Badge>
            ) : (
              <Badge variant="destructive">Inactive</Badge>
            )}
            {user?.is_staff && <Badge variant="secondary">Staff</Badge>}
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4 mt-4">
          <div className="flex justify-between">
            <span className="font-medium">Email</span>
            <span className="text-gray-600">{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date Joined</span>
            <span className="text-gray-600">
              {user?.date_joined && new Date(user.date_joined).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Last Login</span>
            <span className="text-gray-600">
              {user?.last_login
                ? new Date(user.last_login).toLocaleString()
                : "NA"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Balance</span>
            <span className="text-green-600 font-semibold">
              {user?.balance.toFixed(2)}
            </span>
          </div>
          {/* Settings Menu */}
          <Separator className="my-4" />
          <Menu />
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
