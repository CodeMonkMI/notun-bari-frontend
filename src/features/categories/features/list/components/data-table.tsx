import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Category } from "@/lib/api/categories";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { CategoryActions } from "./CategoryActions";

type Props = {
  data: Category[];
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
};

export function CategoryDataTable(props: Props) {
  const {
    data: initialData,
    globalFilter,
    setGlobalFilter,
    page,
    setPage,
    pageSize = 10,
    totalCount,
  } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);

  // --- Table Columns ---
  const columns: ColumnDef<Category>[] = [
    {
      id: "counter",
      header: "#",
      cell: ({ row }) => row.index + 1 + (page - 1) * pageSize,
      enableSorting: false,
    },

    {
      accessorKey: "name",
      header: "Name",
      enableSorting: true,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => <CategoryActions category={row.original} />,
    },
  ];

  const table = useReactTable({
    data: initialData,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getRowId: (row) => row.id.toString(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="w-full flex-col gap-6 text-gray-300">
      <div className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center px-4 mt-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              <IconChevronsLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              <IconChevronLeft />
            </Button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              <IconChevronRight />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
            >
              <IconChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
