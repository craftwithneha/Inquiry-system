// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { SquarePen } from "lucide-react"

// export function EditEvent() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline"><SquarePen /></Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Update Event type list</SheetTitle>
//         </SheetHeader>
//         <div className="grid flex-1 auto-rows-min gap-6 px-4">
//           <div className="grid gap-3">
//             <Label htmlFor="sheet-demo-name">Name</Label>
//             <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
//           </div>
//           <Button type="submit" className="bg-orange-500/95 text-white hover:bg-orange-400">Update Event</Button>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button variant="outline">Close</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   )
// }





import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SquarePen } from "lucide-react"

export function EditEvent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <SquarePen className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="px-5 w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="font-bold text-lg">
            Update Event Type
          </SheetTitle>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 mt-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <Button
            type="submit"
            className="bg-orange-500/95 text-white hover:bg-orange-400"
          >
            Update Event
          </Button>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
