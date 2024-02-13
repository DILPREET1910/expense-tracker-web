// project imports
import SkeletonDashboardTable from "./dashboardTable";
import SkeletonDashboardForm from "./dashbordFrom";

export default function SkeletonDashboad() {
  return (
    <div className="border-4 border-gray-900 rounded-lg p-12 animate-pulse">
      <SkeletonDashboardForm />
      <SkeletonDashboardTable />
    </div>
  );
}
