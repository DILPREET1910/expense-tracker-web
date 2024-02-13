// project imports
import SkeletonDataTable from "../../entries/skeleton/dataTable";
import SkeletonDashboardTable from "../../skeleton/dashboardTable";
import SkeletonDashboardForm from "../../skeleton/dashbordFrom";

export default function SkeletonEachShared() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-row items-center mb-10">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="ml-2 h-4 bg-gray-400 rounded-lg w-32"></div>
      </div>

      <div className="border-4 border-gray-900 rounded-lg p-12">
        <div className="h-4 bg-gray-400 rounded-lg w-32 mb-1"></div>
        <SkeletonDashboardForm />
        <div className="mb-2"></div>
        <SkeletonDashboardTable />

        <div className="mb-12"></div>
        <div className="h-4 bg-gray-400 rounded-lg w-32 mb-2"></div>
        <SkeletonDataTable />
      </div>
    </div>
  );
}
