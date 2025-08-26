import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePayments } from "@/lib/api/payments";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import { PaymentDataTable } from "./components/data-table";

export function ListContainer() {
  const [globalFilter, setGlobalFilter] = useState("");

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isPending, isError } = usePayments({
    page,
    limit: pageSize,
    query: {
      search: globalFilter,
    },
  });

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <DataTableSkeleton rows={pageSize} />;

  const payments = Array.isArray(data) ? data : data.results;

  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
        <Input
          placeholder="Search users..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-xs text-gray-200"
        />
        <Button variant="outline" size="sm" className="text-gray-200">
          <Link className="flex items-center" to={"/dashboard/payments/create"}>
            <IconPlus />
            Add Funds
          </Link>
        </Button>
      </div>
      <PaymentDataTable
        data={payments ?? []}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        totalCount={Array.isArray(data) ? data.length : data.count ?? 0}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
    </div>
  );
}
