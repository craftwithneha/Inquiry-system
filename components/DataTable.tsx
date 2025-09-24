"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  Table as TanstackTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BellRing, MessageSquare } from "lucide-react"

// --- Data & Types for Urgent Deadlines Table ---
export type Deadline = {
  client: string
  eventType: string
  location: string
  deadline: string
  status: string
}

const urgentDeadlines: Deadline[] = [
  {
    client: "Abdullah",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "In 4 Days",
    status: "PENDING",
  },
]

export const deadlineColumns: ColumnDef<Deadline>[] = [
  { accessorKey: "client", header: "Client" },
  { accessorKey: "eventType", header: "Event Type" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "deadline", header: "Deadline" },
  { accessorKey: "status", header: "Status" },
]

// --- Data & Types for Latest Inquiries Table ---
export type Inquiry = {
  client: string
  eventType: string
  location: string
  deadline: string
  status: string
}

const latestInquiries: Inquiry[] = [
  {
    client: "Adullah",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "In 5 Days",
    status: "PENDING",
  },
  {
    client: "Abdullah12",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "In 4 Days",
    status: "PENDING",
  },
  {
    client: "Abdullah",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "In 4 Days",
    status: "PENDING",
  },
  {
    client: "Abdullah",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "13 Days Ago",
    status: "PENDING",
  },
  {
    client: "Abdullah",
    eventType: "Wedding",
    location: "Zoe Rippin I",
    deadline: "13 Days Ago",
    status: "PENDING",
  },
]

export const inquiryColumns: ColumnDef<Inquiry>[] = [
  { accessorKey: "client", header: "Client" },
  { accessorKey: "eventType", header: "Event Type" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "deadline", header: "Deadline" },
  { accessorKey: "status", header: "Status" },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  // Urgent Deadlines Table Instance
  const urgentTable = useReactTable({
    data: urgentDeadlines,
    columns: deadlineColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  // Latest Inquiries Table Instance
  const inquiriesTable = useReactTable({
    data: latestInquiries,
    columns: inquiryColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  // --- Reusable Table Component (Generic) ---
  interface RenderTableProps<T> {
    tableInstance: TanstackTable<T>
    title: string
    icon: React.ReactNode
  }

  const renderTable = <T,>({ tableInstance, title, icon }: RenderTableProps<T>) => (
    <div className="w-full lg:w-1/2 p-4">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {/* ✅ Only table scrolls on small screens */}
      <div className="overflow-x-auto rounded-md border bg-card shadow-sm">
        <Table className="min-w-[600px]">
          <TableHeader>
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-sm font-medium whitespace-nowrap"
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
            {tableInstance.getRowModel().rows?.length ? (
              tableInstance.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-muted/30 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-sm text-muted-foreground whitespace-nowrap"
                    >
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
                  colSpan={tableInstance.getAllColumns().length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row w-full p-4 gap-4">
      {renderTable({
        tableInstance: urgentTable,
        title: "Urgent Deadlines",
        icon: <BellRing className="w-6 h-6 text-red-500" />,
      })}
      {renderTable({
        tableInstance: inquiriesTable,
        title: "Latest Inquiries",
        icon: <MessageSquare className="w-6 h-6" />,
      })}
    </div>
  )
}