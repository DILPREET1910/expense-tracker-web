"use server";

// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports

// project files imports
import { GetDashboardEntries } from "../lib/entries";
import DashboardForm from "../ui/dashboard/dashboardForm";
import DashboardTable from "../ui/dashboard/dashboardTable";

export default async function DashboardDataFetcher({
  params,
}: {
  params: any;
}) {
  const { userId } = auth();

  let filteredData = await GetDashboardEntries({
    user_id: userId!,
    fromDate: Date.parse(params.from),
    toDate: Date.parse(params.to),
  });

  // set categorical Data
  let categoricalData = new Map<string, number>();
  filteredData.forEach((element) => {
    const key = element.category_name;
    const getValue = categoricalData.get(key) || 0;

    categoricalData.set(key, getValue + +element.amount);
  });

  return (
    <div className="border-4 border-gray-900 rounded-lg p-12">
      <DashboardForm />
      <p>{filteredData.toString()}</p>
      <DashboardTable categoricalData={categoricalData} />
    </div>
  );
}
