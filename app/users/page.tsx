// "use client"

// import * as React from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
//   VisibilityState,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, ListFilterPlus, MoreHorizontal } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import AddUser from "../../components/AddUser"

// export type Payment = {
//   id: string
//   name: string
//   amount: number
//   role: "admin" | "sales" | "owner"
//   status: "pending" | "processing" | "success" | "failed" | "Active"
//   email: string
// }

// const data: Payment[] = [
//   { id: "m5gr84i9", role: "admin", amount: 316, name: "Admin", status: "Active", email: "ken99@example.com" },
//   { id: "3u1reuv4", role: "owner", amount: 242, name: "Abdullah", status: "Active", email: "Abe45@example.com" },
//   { id: "derv1ws0", role: "sales", amount: 837, name: "Umair", status: "Active", email: "Monserrat44@example.com" },
//   { id: "5kma53ae", role: "sales", amount: 874, name: "Hamza", status: "Active", email: "Silas22@example.com" },
// ]

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "name",
//     header: "Name",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Email
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
//   {
//     accessorKey: "role",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Role
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div className="lowercase">{row.getValue("role")}</div>,
//   },
//   {
//     accessorKey: "status",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Status
//         <ArrowUpDown className="h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => {
//       const status = row.getValue("status") as string
//       return (
//         <div
//           className={
//             status.toLowerCase() === "active"
//               ? "bg-green-600 font-semibold inline-block text-white px-2 rounded-2xl"
//               : "lowercase"
//           }
//         >
//           {status}
//         </div>
//       )
//     },
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     header: "Actions",
//     cell: () => {
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="h-8 w-8 p-0"
//               aria-label="Open actions menu"
//             >
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem>
//               Edit
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="text-red-600">
//               Delete
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// function DataTableDemo() {
//   const [sorting, setSorting] = React.useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = React.useState({})

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4 gap-2">
//         <Input
//           placeholder="Search by name"
//           value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>
//             table.getColumn("name")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">
//               All Roles <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("")}>
//               All
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("admin")}>
//               Admin
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("sales")}>
//               Sales
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("owner")}>
//               Owner
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               <ListFilterPlus className="ml-2 h-4 w-4" />View
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table.getAllColumns().map((column) => (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 className="capitalize"
//                 checked={column.getIsVisible()}
//                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <AddUser />
//       </div>

//       <div className="overflow-hidden rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(header.column.columnDef.header, header.getContext())}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="text-muted-foreground flex-1 text-sm">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function UsersPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       <DataTableDemo />
//     </div>
//   )
// }


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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, ListFilterPlus, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AddUser from "../../components/AddUser"

export type Payment = {
  id: string
  name: string
  amount: number
  role: "admin" | "sales" | "owner"
  status: "pending" | "processing" | "success" | "failed" | "Active"
  email: string
}

const data: Payment[] = [
  { id: "m5gr84i9", role: "admin", amount: 316, name: "Admin", status: "Active", email: "ken99@example.com" },
  { id: "3u1reuv4", role: "owner", amount: 242, name: "Abdullah", status: "Active", email: "Abe45@example.com" },
  { id: "derv1ws0", role: "sales", amount: 837, name: "Umair", status: "Active", email: "Monserrat44@example.com" },
  { id: "5kma53ae", role: "sales", amount: 874, name: "Hamza", status: "Active", email: "Silas22@example.com" },
]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Role
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div
          className={
            status.toLowerCase() === "active"
              ? "bg-green-600 font-semibold inline-block text-white px-2 rounded-2xl"
              : "lowercase"
          }
        >
          {status}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
              aria-label="Open actions menu"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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

  return (
    <div className="w-full">
      {/* Filters + Controls */}
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search by name"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        {/* Role Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              All Roles <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("")}>
              All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("admin")}>
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("sales")}>
              Sales
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => table.getColumn("role")?.setFilterValue("owner")}>
              Owner
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Column Visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <ListFilterPlus className="ml-2 h-4 w-4" /> View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <AddUser />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
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

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <DataTableDemo />
    </div>
  )
}
