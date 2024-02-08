"use server";

// clerk imports
import { auth } from "@clerk/nextjs";

// project imports
import { GetEntries } from "@/app/lib/entries";
import DataTable from "@/app/ui/dashboard/entries/dataTable";

export default async function EntriesDataFetcher() {
  // get user id
  const { userId } = auth();

  // get data entries
  const entries = await GetEntries({ user_id: userId! });

  return <DataTable entries={entries} />;
}
