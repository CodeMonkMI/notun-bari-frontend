import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { useUsers } from "@/lib/api/users";
import { UserDataTable } from "./components/data-table";

export function UserListContainer() {
  const { data: users, isPending, isError } = useUsers();

  if (isError) {
    return <h2>Error Fetching data</h2>;
  }
  if (isPending) {
    return <DataTableSkeleton rows={15} />;
  }
  return (
    <div className="font-sans text-gray-800">
      <UserDataTable data={users ?? []} />
    </div>
  );
}
