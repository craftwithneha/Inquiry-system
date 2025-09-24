"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold">Calendar</h1>

      {/* Calendar Card */}
      <Card className="w-full shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Event Calendar</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* Selected Date */}
      {date && (
        <div className="text-center text-muted-foreground">
          Selected Date:{" "}
          <span className="font-medium text-foreground">
            {date.toDateString()}
          </span>
        </div>
      )}
    </div>
  )
}
