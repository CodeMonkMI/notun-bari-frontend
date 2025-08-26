import { Button } from "@/components/ui/button";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

type PaginationProps = {
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
};

export function Pagination({ page, setPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-center px-4 mt-10">
      <div className="flex items-center gap-2">
        <Button size="icon" onClick={() => setPage(1)} disabled={page === 1}>
          <IconChevronsLeft />
        </Button>
        <Button
          size="icon"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          <IconChevronLeft />
        </Button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <Button
          size="icon"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          <IconChevronRight />
        </Button>
        <Button
          size="icon"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          <IconChevronsRight />
        </Button>
      </div>
    </div>
  );
}
