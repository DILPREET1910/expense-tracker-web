// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

// project files imports
import { GetDashboardEntries } from "../lib/entries";
import DashboardForm from "../ui/dashboard/dashboardForm";
import { global } from "@/global";

export default async function Dashboard() {
  const { userId } = auth();

  let filteredData = await GetDashboardEntries({
    user_id: userId!,
    fromDate: global.fromDate,
    toDate: global.toDate,
  });

  // get categorical Data
  let categoricalData = new Map<string, number>();
  filteredData.forEach((element) => {
    const key = element.category_name;
    const getValue = categoricalData.get(key) || 0;

    categoricalData.set(key, getValue + +element.amount);
  });

  async function revalidate() {
    "use server";
    revalidatePath("/dashboard");
  }

  return (
    <DashboardForm revalidate={revalidate} categoricalData={categoricalData} />
  );
}
