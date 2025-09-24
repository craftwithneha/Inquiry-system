"use client"

import React from "react"
import { Button } from "./ui/button"
import { Eye, MapPin } from "lucide-react"
import { Sheet } from "@/components/ui/sheet"
import AddUser from "../components/AddUser"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function DashboardCards() {
  return (
    <div className="py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 py-4">
        <span className="text-xl sm:text-2xl font-bold">Dashboard</span>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button variant="secondary" className="flex items-center gap-2 text-sm sm:text-base">
            <MapPin className="h-4 w-4" /> Add New Location
          </Button>

          <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base">
            <Eye className="h-4 w-4" /> View Active Inquiries
          </Button>

          <Sheet>
            <AddUser />
          </Sheet>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">4</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">99</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">50</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Reservations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardCards