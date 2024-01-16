// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

// project files imports
import { GetDashboardEntries } from "../lib/entries";
import DashboardForm from "../ui/dashboard/dashboardForm";

export default async function Dashboard() {
  const { userId } = auth();

  async function GetCategoricalDataEntries(formData: FormData) {
    "use server";
    let filteredData = await GetDashboardEntries({
      user_id: userId!,
      fromDate: new Date(formData.get("fromDate")!.toString()),
      toDate: new Date(formData.get("toDate")!.toString()),
    });

    console.log(filteredData);
  }

  return <DashboardForm GetCategoricalData={GetCategoricalDataEntries} />;
}
