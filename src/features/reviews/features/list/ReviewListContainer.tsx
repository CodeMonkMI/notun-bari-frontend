import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { useReviews } from "@/lib/api/reviews";
import { useState } from "react";
import { ReviewDataTable } from "./components/data-table";

export function ReviewListContainer() {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isPending, isError } = useReviews({
    limit: pageSize,
    page,
  });

  if (isError) return <h2>Error fetching reviews</h2>;
  if (isPending) return <DataTableSkeleton rows={15} />;

  return (
    <div className="font-sans text-gray-800">
      <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
        <h4 className="text-white text-3xl">Reviews</h4>
      </div>

      <ReviewDataTable
        data={Array.isArray(data) ? data : data?.results ?? []}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        totalCount={Array.isArray(data) ? data.length : data?.count || 0}
      />
    </div>
  );
}
