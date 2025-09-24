"use client"

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
import { PlusCircle } from "lucide-react"

export function AddInquiry() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2">
          <PlusCircle className="w-4 h-4" />
          Add Inquiry
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md px-6">
        <SheetHeader>
          <SheetTitle className="font-bold text-lg">Add New Inquiry</SheetTitle>
        </SheetHeader>

        <div className="grid gap-6 mt-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Customer name" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@mail.com" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+92 300 1234567" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="eventType">Event Type</Label>
            <Input id="eventType" placeholder="Wedding / Birthday / Meeting" />
          </div>

          <Button
            type="submit"
            className="bg-orange-500 text-white hover:bg-orange-400"
          >
            Save Inquiry
          </Button>
        </div>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
