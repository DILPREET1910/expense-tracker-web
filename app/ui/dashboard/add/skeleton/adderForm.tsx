export default function SkeletonAdderForm() {
  return (
    <div className="border-black border-4 rounded-xl p-12">
      <div>
        <div className="flex flex-row">
          <div className="h-4 bg-gray-200 rounded-full p-1.5 w-12"></div>
          <div className="h-4 bg-gray-300 rounded-full p-1.5 w-12 ml-auto"></div>
        </div>

        <div className="pt-12">
          <div className="h-2 bg-gray-300 rounded-full p-1.5 w-20"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded-full p-2 w-full"></div>
        </div>

        <div className="pt-8">
          <div className="h-2 bg-gray-300 rounded-full p-1.5 w-28"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded-full p-2 w-full"></div>
        </div>

        <div className="pt-10">
          <div className="h-8 bg-gray-500 rounded-full p-2 w-full"></div>
        </div>
      </div>
    </div>
  );
}
