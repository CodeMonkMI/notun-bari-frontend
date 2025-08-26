import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

import { useAdoptions } from "@/lib/api/adoptions";
import { AdoptionDataTable } from "./components/data-table";

export function ListContainer() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isPending, isError } = useAdoptions();

  if (isPending) return <DataTableSkeleton rows={pageSize} />;
  if (isError) return <h2>Error fetching pets</h2>;

  const adoptions = Array.isArray(data) ? data : data.results;

  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
        <div className="flex items-center gap-x-3"></div>
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
        data={adoptions ?? []}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        totalCount={Array.isArray(data) ? data?.length : data.count ?? 0}
      />
    </div>
  );
}
