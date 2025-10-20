import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMe } from "@/lib/api/auth";
import type { Pet } from "@/lib/api/pets";
import { cn } from "@/lib/utils";
import { type Category, getDefaultPetImage } from "@/utils/getDefaultPetImage";
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
import { useSearchParams } from "react-router";
import { Actions } from "./Actions";

type Props = {
  data: Pet[];
  page: number;
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
};

export function PetDataTable(props: Props) {
  const { data: initialData, page, setPage, pageSize = 10, totalCount } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [searchParam] = useSearchParams();
  const filter = searchParam.get("filter");

  const { data: me, isSuccess } = useMe();

  // --- Table Columns ---
  const columns: ColumnDef<Pet>[] = [
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
      accessorKey: "description",
      header: "Description",
      enableSorting: true,
    },
    {
      accessorKey: "category_name",
      header: "Category",
      enableSorting: true,
    },
    {
      accessorKey: "fees",
      header: "Fees",
      enableSorting: true,
    },
    {
      accessorKey: "breed",
      header: "Breed",
      enableSorting: true,
    },
    {
      accessorKey: "age",
      header: "Age",
      enableSorting: true,
    },
    ...(isSuccess && me?.is_staff
      ? [
          {
            accessorKey: "status",
            header: "Status",
            enableSorting: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cell: ({ row }: any) => {
              const status = row.original.status;

              return (
                <Badge
                  className={cn("", {
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300":
                      status === "pending",
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300":
                      status === "approved",
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300":
                      status === "adopted",
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300":
                      status === "withdrawn",
                    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300":
                      status === "suspended",
                  })}
                >
                  {status}
                </Badge>
              );
            },
          },
        ]
      : []),
    {
      accessorKey: "visibility",
      header: "Visibility",
      enableSorting: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cell: ({ row }: any) => {
        const visibility = row.original.visibility;

        return (
          <Badge
            className={cn("", {
              "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300":
                visibility === "public",
              "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300":
                visibility === "private",
            })}
          >
            {visibility}
          </Badge>
        );
      },
    },
    ...(filter !== "my"
      ? [
          {
            accessorKey: "owner",
            header: "Owner",
            enableSorting: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cell: ({ row }: any) =>
              `${row.original.owner?.first_name || ""} ${
                row.original.owner?.last_name || ""
              }`,
          },
        ]
      : []),

    {
      accessorKey: "image",
      header: "image",
      enableSorting: true,
      cell: ({ row }) => (
        <div>
          <div>
            <img
              src={
                row.original.image ??
                getDefaultPetImage(row.original.category_name as Category)
              }
              className="w-full h-16 object-cover"
            />
          </div>
        </div>
      ),
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Actions
          pet={row.original as Pet}
          is_admin={!!(isSuccess && me?.is_staff)}
        />
      ),
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
