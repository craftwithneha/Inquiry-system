
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Inquiry } from "./inquiries";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "venue",
    header: "Venue",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "eventDate",
    header: "Event Date",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  },
  {
    accessorKey: "type",
    header: "Event Type",
  },
  {
    accessorKey: "guests",
    header: "Guests",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const color =
        status === "CONFIRMED"
          ? "bg-green-500/15 text-green-700"
          : status === "PENDING"
          ? "bg-yellow-500/15 text-yellow-700"
          : "bg-red-500/15 text-red-700";

      return <Badge className={`${color} px-2 py-1 rounded-full`}>{status}</Badge>;
    },
  },
];