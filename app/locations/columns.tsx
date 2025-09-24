"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Location } from "./locations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, MapPin, ArrowUpDown } from "lucide-react"
import Image from "next/image"

export const columns: ColumnDef<Location>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("image") as string
      return (
        <Image
          src={image}
          alt="Location"
          width={45}
          height={45}
          className="rounded-md object-cover"
        />
      )
    },
  },
  {
    accessorKey: "mapLink",
    header: "Map",
    cell: ({ row }) => {
      const mapLink = row.getValue("mapLink") as string
      return (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <MapPin className="h-4 w-4" /> View
        </a>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Location Name
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "inquiries",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Inquiries
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "reservations",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Reservations
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "overall",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Overall
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          className="px-3 py-1"
          variant={status === "Active" ? "default" : "destructive"}
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "minCapacity",
    header: "Min Capacity",
  },
  {
    accessorKey: "maxCapacity",
    header: "Max Capacity",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "primaryPhone",
    header: "Primary Phone",
  },
  {
    accessorKey: "secondaryPhone",
    header: "Secondary Phone",
  },
  {
    accessorKey: "attributes",
    header: "Attributes",
    cell: ({ row }) => {
      const attrs = row.getValue("attributes") as string[]
      return (
        <div className="flex gap-2">
          {attrs.map((attr, i) => (
            <Badge key={i} variant="outline" className="px-2 py-1">
              {attr}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "eventTypes",
    header: "Event Types",
    cell: ({ row }) => {
      const types = row.getValue("eventTypes") as string[]
      return (
        <div className="flex gap-2">
          {types.map((type, i) => (
            <Badge key={i} variant="secondary" className="px-2 py-1">
              {type}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => console.log("Edit", row.original)}
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => console.log("Delete", row.original)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
]
