// react imports
import { Suspense } from "react";

// project imports
import SharedDataDataFetcher from "./dataFetcher";
import SkeletonEachShared from "@/app/ui/dashboard/shared/skeleton/eachShared";

export default function SharedData({
  params,
  searchParams,
}: {
  params: { public_key: string };
  searchParams: any;
}) {
  return (
    <Suspense fallback={<SkeletonEachShared />}>
      <SharedDataDataFetcher params={params} searchParams={searchParams} />
    </Suspense>
  );
}
