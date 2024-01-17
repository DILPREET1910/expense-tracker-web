// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

// project files imports
import { GetDashboardEntries } from "../lib/entries";
import DashboardForm from "../ui/dashboard/dashboardForm";
import DashboardTable from "../ui/dashboard/dashboardTable";

export default async function Dashboard() {
  const { userId } = auth();

  return (
    <div className="border-4 border-gray-900 rounded-lg p-12">
      <DashboardForm />
      <DashboardTable />
    </div>
  );
}
