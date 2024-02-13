export default function SkeletonAddPublicKeyForm() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-500 rounded-lg w-24"></div>
      <div className="mt-2 flex flex-row">
        <div className="h-7 bg-gray-200 rounded-lg w-44"></div>
        <div className="ml-3 h-7 bg-gray-700 rounded-lg w-10"></div>
      </div>
    </div>
  );
}
