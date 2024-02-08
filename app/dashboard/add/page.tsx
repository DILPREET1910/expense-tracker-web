// react imports
import { Suspense } from "react";

// project imports
import AdderDataFetcher from "./dataFetcher";
import SkeletonAdderForm from "@/app/ui/dashboard/add/skeleton/adderForm";

export default function Add() {
  return (
    <Suspense fallback={<SkeletonAdderForm />}>
      <AdderDataFetcher />
    </Suspense>
  );
}
