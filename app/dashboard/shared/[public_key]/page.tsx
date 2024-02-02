"use server";

// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import { CheckValidSharedSlug, GetSharedUserId } from "@/app/lib/user";
import NotFound from "@/app/not-found";
import DashboardTable from "@/app/ui/dashboard/dashboardTable";
import { GetDashboardEntries } from "@/app/lib/entries";
import SharedDashboardForm from "@/app/ui/dashboard/shared/sharedDashboardForm";

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

  return (
    <div>
      <div className="border-4 border-gray-900 rounded-lg p-12">
        <SharedDashboardForm />
        <DashboardTable categoricalData={categoricalData} />
      </div>
    </div>
  );
}
