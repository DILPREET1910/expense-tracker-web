// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

// project files imports
import { GetDashboardEntries } from "../lib/entries";
import DashboardForm from "../ui/dashboard/dashboardForm";
import { global } from "@/global";

export default async function Dashboard(){
  const { userId } = auth();

  let filteredData = await GetDashboardEntries({user_id:userId!,fromDate:global.fromDate,toDate:global.toDate});

  async function revalidate(){
    "use server";
    revalidatePath('/dashboard');
  }

  return(
    <DashboardForm revalidate={revalidate}/>
  );
}
