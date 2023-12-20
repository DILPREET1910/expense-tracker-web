// project files imports
import { GetCategoryName } from "@/app/lib/categories";
import { GetEntries } from "@/app/lib/entries";
import DataTable from "@/app/ui/dashboard/entries/dataTable";

// clerk imports
import { auth } from "@clerk/nextjs";

export default async function Entries() {
  // get user id
  const { userId } = auth();

  // get data entries
  const entries = await GetEntries({user_id:userId!});

  return(
    <DataTable entries={entries}/>
  );
}
