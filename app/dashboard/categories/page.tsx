// react imports
import { Suspense } from "react";

// project imports
import CategoriesDataFetcher from "./dataFetcher";
import SkeletonCategories from "@/app/ui/dashboard/categories/skeleton/categories";

export default function Categories() {
  return (
    <Suspense fallback={<SkeletonCategories />}>
      <CategoriesDataFetcher />
    </Suspense>
  );
}
