import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";

import { usePets } from "@/lib/api/pets";
import { cn } from "@/lib/utils";
import { PetDataTable } from "./components/data-table";

export function ListContainer() {
  const [globalFilter, setGlobalFilter] = useState("");

  const [searchParam] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = searchParam.get("filter") ?? "all";

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isPending, isError } = usePets({
    page,
    limit: pageSize,
    filter,
    query: {
      search: globalFilter,
    },
  });

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
          <Button
            variant={filter === "all" ? "secondary" : "outline"}
            size="sm"
            className={cn("text-gray-200")}
          >
            <Link className="flex items-center" to={"/dashboard/pets"}>
              All Pets
            </Link>
          </Button>
          <Button
            variant={filter === "my" ? "secondary" : "outline"}
            size="sm"
            className="text-gray-200"
          >
            <Link
              className="flex items-center"
              to={"/dashboard/pets?filter=my"}
            >
              My Pets
            </Link>
          </Button>
          <Button
            variant={filter === "adopted" ? "secondary" : "outline"}
            size="sm"
            className="text-gray-200"
          >
            <Link
              className="flex items-center"
              to={"/dashboard/pets?filter=adopted"}
            >
              My Adopted Pets
            </Link>
          </Button>
        </div>
        <Button variant="outline" size="sm" className="text-gray-200">
          <Link className="flex items-center" to={"/dashboard/pets/create"}>
            <IconPlus className="mr-1" />
            Add Pet
          </Link>
        </Button>
      </div>

      <PetDataTable
        data={data?.results ?? []}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        totalCount={data?.count ?? 0}
      />
    </div>
  );
}
