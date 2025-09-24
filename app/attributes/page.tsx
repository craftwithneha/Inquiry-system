"use client"
import React, { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

export default function AttributesPage() {
  const [attributes, setAttributes] = useState([
    "Free Parking",
    "Big Terrace",
    "Garden",
    "Air Conditioning",
    "Sound System",
    "Stage/Platform",
  ])

  const handleEdit = (index: number) => {
    const newName = prompt("Edit Attribute:", attributes[index])
    if (newName && newName.trim() !== "") {
      const updated = [...attributes]
      updated[index] = newName
      setAttributes(updated)
    }
  }

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this attribute?")) {
      setAttributes(attributes.filter((_, i) => i !== index))
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Venue Attributes</h1>

      <Card className="shadow-md rounded-2xl">
        <CardContent>
          <div className="space-y-3">
            {attributes.map((attr, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b last:border-b-0 pb-2"
              >
                {/* Left side (Attribute name) */}
                <span className="text-base font-medium">{attr}</span>

                {/* Right side (Edit + Delete) */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(index)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
