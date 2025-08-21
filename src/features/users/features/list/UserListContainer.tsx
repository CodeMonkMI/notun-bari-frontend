import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUsers } from "@/lib/api/users";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import { UserDataTable } from "./components/data-table";

export function UserListContainer() {
  const { data: users, isPending, isError } = useUsers();
  const [globalFilter, setGlobalFilter] = useState("");

  if (isError) {
    return <h2>Error Fetching data</h2>;
  }
  if (isPending) {
    return <DataTableSkeleton rows={15} />;
  }
  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
        <Input
          placeholder="Search users..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-xs"
        />
        <Button variant="outline" size="sm">
          <Link className="flex items-center" to={"/dashboard/users/create"}>
            <IconPlus />
            Add User
          </Link>
        </Button>
      </div>
      <UserDataTable
        data={users ?? []}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
    </div>
  );
}
