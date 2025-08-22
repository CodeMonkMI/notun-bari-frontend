import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { SingleUser } from "@/lib/api/users";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDotsVertical,
} from "@tabler/icons-react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { Link } from "react-router";
import { z } from "zod";

// Schema

export function UserDataTable({
  data: initialData,
  globalFilter,
  setGlobalFilter,
}: {
  data: z.infer<SingleUser>[];
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 12,
  });

  const table = useReactTable({
    data: initialData,
    columns,
    state: {
      sorting,
      pagination,
      globalFilter,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getRowId: (row) => (row as SingleUser).id.toString(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full flex-col gap-6 text-gray-300">
      {/* Top actions bar */}

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
        <div className="flex items-center justify-center px-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <IconChevronsLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <IconChevronLeft />
            </Button>
            <span className="text-sm">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <IconChevronRight />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <IconChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Table columns
const columns: ColumnDef<z.infer<SingleUser>>[] = [
  {
    id: "counter",
    header: "#",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: true,
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    enableSorting: true,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: true,
  },
  {
    accessorKey: "username",
    header: "Username",
    enableSorting: true,
  },
  {
    accessorKey: "is_active",
    header: "Active",
    enableSorting: true,
    cell: ({ row }) =>
      (row.original as SingleUser).is_active ? (
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          Active
        </Badge>
      ) : (
        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
          Inactive
        </Badge>
      ),
  },
  {
    accessorKey: "is_staff",
    header: "Staff",
    enableSorting: true,
    cell: ({ row }) =>
      (row.original as SingleUser).is_staff ? (
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          Staff
        </Badge>
      ) : (
        <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          User
        </Badge>
      ),
  },
  {
    accessorKey: "last_login",
    header: "Last Login",
    enableSorting: true,
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Actions",
    enableSorting: false,
    cell: ({ row }) => {
      const user = row.original as SingleUser;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground data-[state=open]:bg-muted"
            >
              <IconDotsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>
              <Link
                className=" w-full"
                to={`/dashboard/users/${row.id}/update`}
              >
                Update User
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Suspend", row.original)}
              disabled={!user.is_active}
            >
              Suspend User
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Promote", row.original)}
              disabled={user.is_staff}
            >
              Promote User
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => console.log("Delete", row.original)}
            >
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
