"use server";

// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import NotFound from "@/app/not-found";
import {
  CheckValidSharedSlug,
  GetSharedUserId,
  GetSingleSharedUserProfileData,
} from "@/app/lib/user";
import { GetDashboardEntries, GetEntries } from "@/app/lib/entries";
import DashboardTable from "@/app/ui/dashboard/dashboardTable";
import SharedDashboardForm from "@/app/ui/dashboard/shared/sharedDashboardForm";
import DataTable from "@/app/ui/dashboard/entries/dataTable";

export default async function SharedData({
  params,
  searchParams,
}: {
  params: { public_key: string };
  searchParams: any;
}) {
  const { userId } = auth();

  const validSlug = await CheckValidSharedSlug({
    id: userId!,
    public_key: params.public_key,
  });

  // return not founf for invalid slug
  if (!validSlug) {
    return <NotFound />;
  }

  // get filtered data
  const sharedUserId = await GetSharedUserId({ public_key: params.public_key });
  let filteredData = await GetDashboardEntries({
    user_id: sharedUserId!,
    fromDate: new Date(searchParams.from),
    toDate: new Date(searchParams.to),
  });

  // set categorical data
  let categoricalData = new Map<string, number>();
  filteredData.forEach((element) => {
    const key = element.category_name;
    const getValue = categoricalData.get(key) || 0;

    categoricalData.set(key, getValue + +element.amount);
  });

  // get data entries
  const entries = await GetEntries({ user_id: sharedUserId! });

  // get shared user profile data
  const shared_user_profile_data = await GetSingleSharedUserProfileData({
    public_key: params.public_key,
  });

  return (
    <div>
      <div className="pb-5">
        <img
          className="w-8 h-8 rounded-full inline-block"
          src={shared_user_profile_data[0] || ""}
          alt="user profile"
        />
        <p className="inline-block pl-2 font-semibold">
          {shared_user_profile_data[1]} {shared_user_profile_data[2]}
        </p>
      </div>
      <div className="border-4 border-gray-900 rounded-lg p-10">
        <p className="text-lg font-semibold">Dashboard</p>
        <SharedDashboardForm />
        <DashboardTable categoricalData={categoricalData} />
        <p className="mt-12 text-lg font-semibold">Data Entries</p>
        <DataTable entries={entries} />
      </div>
    </div>
  );
}
