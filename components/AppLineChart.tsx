"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "January", total: 186 },
  { month: "February", total: 305 },
  { month: "March", total: 237 },
  { month: "April", total: 73 },
  { month: "May", total: 209 },
  { month: "June", total: 214 },
  { month: "July", total: 209 },
  { month: "August", total: 200 },
  { month: "September", total: 109 },
  { month: "October", total: 237 },
  { month: "November", total: 289 },
  { month: "December", total: 309 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function AppLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enquiries Over Months</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* Subtle grid */}
            <CartesianGrid
              stroke="#e5e5e5"
              strokeDasharray="3 3"
              vertical
              horizontal
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <Tooltip
              cursor={{ stroke: "var(--chart-1)", strokeWidth: 1 }}
              content={<ChartTooltipContent />}
            />

            <Line
              dataKey="total"
              type="natural"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)" }}
              activeDot={{ r: 6, fill: "var(--chart-1)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}