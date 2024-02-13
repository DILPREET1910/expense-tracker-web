// project imports
import SkeletonAddCategoryForm from "./addCategoriesForm";

export default function SkeletonCategories() {
  return (
    <div className="border-4 border-gray-900 rounded-lg p-12">
      <div className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row">
        <div className="mr-auto h-4 bg-gray-200 rounded-full p-1.5 w-24"></div>

        <div className="h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
        <div className="ml-4 h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
      </div>
      <div className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row">
        <div className="mr-auto h-4 bg-gray-200 rounded-full p-1.5 w-32"></div>

        <div className="h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
        <div className="ml-4 h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
      </div>
      <div className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row">
        <div className="mr-auto h-4 bg-gray-200 rounded-full p-1.5 w-10"></div>

        <div className="h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
        <div className="ml-4 h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
      </div>
      <div className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row">
        <div className="mr-auto h-4 bg-gray-200 rounded-full p-1.5 w-20"></div>

        <div className="h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
        <div className="ml-4 h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
      </div>
      <div className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row">
        <div className="mr-auto h-4 bg-gray-200 rounded-full p-1.5 w-24"></div>

        <div className="h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
        <div className="ml-4 h-4 bg-gray-400 rounded-full p-1.5 w-7"></div>
      </div>

      <SkeletonAddCategoryForm />
    </div>
  );
}
