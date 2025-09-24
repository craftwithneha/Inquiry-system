import { inquiries } from "./inquiries";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function InquiriesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inquiry Oversight</h1>
      <DataTable columns={columns} data={inquiries} />
    </div>
  );
}