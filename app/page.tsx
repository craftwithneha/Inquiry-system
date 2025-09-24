import { AppLineChart } from "@/components/AppLineChart"
import DashboardCards from "@/components/DashboardCards"
import { DataTableDemo } from "../components/DataTable"
import { TopPerformingLocations } from "@/components/TopPerformingLocations"


export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto space-y-8">

      {/* Dashboard Stats */}
      <DashboardCards />

      {/* Chart */}
      <section className="w-full overflow-x-auto">
        <div className="min-w-[320px]">
          <AppLineChart />
        </div>
      </section>

      {/* Data Table */}
      <section className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <DataTableDemo />
        </div>
      </section>

      {/* Top Performing Locations */}
      <section className="w-full overflow-x-auto">
        <div className="min-w-[400px]">
          <TopPerformingLocations />
        </div>
      </section>
    </main>
  )
}