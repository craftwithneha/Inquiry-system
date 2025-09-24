// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Trash } from "lucide-react"
// import { EditEvent } from "./EditEvent"
// import { Button } from "./ui/button"

// const events = [
//   { name: "Wedding" },
//   { name: "Birthday" },
//   { name: "Party" },
//   { name: "Meeting" },
// ]

// export function EventTable() {
//   return (
//     <section>
//       <h1 className="font-bold text-2xl my-4">Event Types</h1>
//       <Card>
//         <CardContent className="divide-y">
//           {events.map((event) => (
//             <div
//               key={event.name}
//               className="flex items-center justify-between py-1"
//             >
//               {/* Event name */}
//               <p className="font-medium">{event.name}</p>

//               {/* Action buttons */}
//               <div className="flex items-center gap-3">
//                 <Button >
//                   <EditEvent />
//                 </Button>
//                 <Button className="border rounded-md p-2 hover:bg-gray-100 transition">
//                   <Trash className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     </section>
//   )
// }




"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trash } from "lucide-react"
import { EditEvent } from "./EditEvent"
import { Button } from "./ui/button"

const events = [
  { name: "Wedding" },
  { name: "Birthday" },
  { name: "Party" },
  { name: "Meeting" },
]

export function EventTable() {
  return (
    <section>
      <h1 className="font-bold text-2xl my-4">Event Types</h1>
      <Card>
        <CardContent className="divide-y">
          {events.map((event) => (
            <div
              key={event.name}
              className="flex items-center justify-between py-2"
            >
              {/* Event name */}
              <p className="font-medium">{event.name}</p>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <EditEvent />
                <Button
                  variant="outline"
                  size="icon"
                  className="border rounded-md hover:bg-gray-100 transition"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
