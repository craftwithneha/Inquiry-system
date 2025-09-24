"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { status?: string }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="space-y-4">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-[220px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search locations..."
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-8"
            />
          </div>

          <Select value={statusFilter} onValueChange={(val) => setStatusFilter(val)}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            View
          </Button>

          {/* Add Location Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                + Add Location
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[500px]">
              <SheetHeader>
                <SheetTitle>Add New Location</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 p-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Location Name</label>
                  <Input placeholder="Enter location name" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="Active">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Address</label>
                  <Input placeholder="Enter address" />
                </div>
              </div>
              <SheetFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Save Location
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border shadow-sm overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto">
          <Table className="min-w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-muted/40">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-sm font-semibold whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table
                .getFilteredRowModel()
                .rows.filter((row) =>
                  statusFilter === "All"
                    ? true
                    : row.original.status === statusFilter
                )
                .map((row, i) => (
                  <TableRow
                    key={row.id}
                    className={
                      i % 2 === 0
                        ? "bg-white hover:bg-muted/30"
                        : "bg-muted/10 hover:bg-muted/30"
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-sm whitespace-nowrap"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Page size left */}
        <div className="flex items-center gap-2">
          <Select
            value={String(pageSize)}
            onValueChange={(val) => {
              setPageSize(Number(val));
              table.setPageSize(Number(val));
            }}
          >
            <SelectTrigger className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            Showing {table.getRowModel().rows.length} of {data.length}
          </span>
        </div>

        {/* Pagination right */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          <span className="px-3 py-1 border rounded-md">
            {table.getState().pagination.pageIndex + 1}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}