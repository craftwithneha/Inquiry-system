"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const locations = [
  {
    name: "Downtown Plaza",
    reservations: 128,
    conversion: 68,
  },
  {
    name: "Sunset Heights",
    reservations: 98,
    conversion: 59,
  },
  {
    name: "Greenview Gardens",
    reservations: 75,
    conversion: 52,
  },
  {
    name: "Ocean Breeze Apartments",
    reservations: 63,
    conversion: 48,
  },
]

export function TopPerformingLocations() {
  return (
    <div className="w-full">
      {/* Section Heading */}
      <h1 className="font-bold text-xl sm:text-2xl mb-3">
        Top Performing Locations
      </h1>

      <Card className="w-full">
        <CardHeader className="p-3 sm:p-4">
          <CardTitle className="text-base sm:text-lg font-semibold">
            Top Performing Locations
          </CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Sorted by total reservations
          </p>
        </CardHeader>

        <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4">
          {locations.map((loc, index) => (
            <div
              key={loc.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b last:border-0 pb-3 last:pb-0 gap-2"
            >
              {/* Left side */}
              <div className="text-sm sm:text-base">
                <p className="font-medium">{loc.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {loc.reservations} reservations • {loc.conversion}% conv. rate
                </p>
              </div>

              {/* Right side (Badge) */}
              <div className="flex sm:justify-end">
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  #{index + 1}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}