import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Adoption } from "@/lib/api/adoptions";
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
import { Actions } from "./Actions";

type Props = {
  data: Adoption[];
  page: number;
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
};

export function AdoptionDataTable(props: Props) {
  const { data: initialData, page, setPage, pageSize = 10, totalCount } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);

  // --- Table Columns ---
  const columns: ColumnDef<Adoption>[] = [
    {
      id: "counter",
      header: "#",
      cell: ({ row }) => row.index + 1 + (page - 1) * pageSize,
      enableSorting: false,
    },

    {
      accessorKey: "pet",
      header: "Pet Name",
      enableSorting: true,
      cell: ({ getValue }) =>
        `${(getValue() as Adoption["pet"]).name ?? "Unknown"}`,
    },
    {
      accessorKey: "pet",
      header: "Pet Age",
      enableSorting: true,
      cell: ({ getValue }) =>
        `${(getValue() as Adoption["pet"]).age ?? "Unknown"}`,
    },
    {
      accessorKey: "pet",
      header: "Fees",
      enableSorting: true,
      cell: ({ getValue }) =>
        `${(getValue() as Adoption["pet"]).fees ?? "Unknown"}`,
    },

    {
      accessorKey: "adopted_by",
      header: "Adopted By",

      enableSorting: true,
      cell: ({ getValue }) =>
        `${(getValue() as Adoption["adopted_by"])?.first_name || ""} ${
          (getValue() as Adoption["adopted_by"])?.last_name || ""
        }`,
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => <Actions adoption={row.original as Adoption} />,
    },
  ];

  const table = useReactTable({
    data: initialData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
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
