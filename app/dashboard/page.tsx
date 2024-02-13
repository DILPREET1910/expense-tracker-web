// react imports
import { Suspense } from "react";

// project imports
import DashboardDataFetcher from "./dataFetcher";
import SkeletonDashboad from "../ui/dashboard/skeleton/dashboard";

export default function Dashboard({ searchParams }: any) {
  return (
    <Suspense fallback={<SkeletonDashboad />}>
      <DashboardDataFetcher params={searchParams} />
    </Suspense>
  );
}
