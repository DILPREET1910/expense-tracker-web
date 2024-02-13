// react imports
import { Suspense } from "react";

// project imports
import SharedWithYouDataFetcher from "./dataFetcher";
import SkeletonShared from "@/app/ui/dashboard/shared/skeleton/shared";

export default function SharedWithYou() {
  return (
    <Suspense fallback={<SkeletonShared />}>
      <SharedWithYouDataFetcher />
    </Suspense>
  );
}
