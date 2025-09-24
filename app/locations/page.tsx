// import { DataTable } from "./data-table"
// import { columns } from "./columns"
// import { locations } from "./locations"

// export default function LocationsPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-semibold mb-4">Location Management</h1>
//       <DataTable columns={columns} data={locations} />
//     </div>
//   )
// }


import { DataTable } from "./data-table"
import { columns } from "./columns"
import { locations } from "./locations"

export default function LocationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Location Management</h1>
      <DataTable columns={columns} data={locations} />
    </div>
  )
}
