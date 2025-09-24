import { DataTable } from "./data-table"
import { users } from "./users"

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <DataTable data={users} />
    </div>
  )
}
