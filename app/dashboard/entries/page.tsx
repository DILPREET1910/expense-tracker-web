// project files imports
import EntriesDataFetcher from "./dataFetcher";
import SkeletonDataTable from "@/app/ui/dashboard/entries/skeleton/dataTable";

// react imports
import { Suspense } from "react";

export default function Entries() {
  return (
    <div>
      <Suspense fallback={<SkeletonDataTable />}>
        <EntriesDataFetcher />;
      </Suspense>
    </div>
  );
}
