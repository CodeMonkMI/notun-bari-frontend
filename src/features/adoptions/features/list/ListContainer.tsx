import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

import { useAdoptions } from "@/lib/api/adoptions";
import { AdoptionDataTable } from "./components/data-table";

export function ListContainer() {
  const [globalFilter, setGlobalFilter] = useState("");

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isPending, isError } = useAdoptions(page, pageSize);

  if (isError) return <h2>Error fetching pets</h2>;
  if (isPending) return <DataTableSkeleton rows={pageSize} />;

  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
        <div className="flex items-center gap-x-3">
          <Input
            placeholder="Search Pets..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-80 text-gray-200"
          />
        </div>
        <Button variant="outline" size="sm" className="text-gray-200">
          <Link
            className="flex items-center"
            to={"/dashboard/adoptions/create"}
          >
            <IconPlus className="mr-1" />
            Adopt
          </Link>
        </Button>
      </div>
      <AdoptionDataTable
        data={data?.results ?? []}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        totalCount={data?.count ?? 0}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
    </div>
  );
}
