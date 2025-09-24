
"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Inquiry } from "./inquiries"
import { AddInquiry } from "../../components/AddInquiry"

interface DataTableProps {
  columns: ColumnDef<Inquiry, unknown>[]
  data: Inquiry[]
}

export function DataTable({ columns, data }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue<string>(columnId)
      return value
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    },
  })

  return (
    <div className="space-y-4">
      {/* Search & Add */}
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search inquiries..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64"
        />
        <AddInquiry />
      </div>

      {/* Table */}
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/40">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-sm font-semibold"
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, i) => (
                <TableRow
                  key={row.id}
                  className={
                    i % 2 === 0
                      ? "bg-white hover:bg-muted/30"
                      : "bg-muted/10 hover:bg-muted/30"
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-sm">
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
                  className="text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}