export default function SkeletonDashboardTable() {
  return (
    <div className="mt-6">
      <div className="border-4 border-gray-900 rounded-lg">
        <table className="w-full">
          <thead className="text-left">
            <tr className="bg-gray-200">
              <th className="border border-gray-500 p-1">category</th>
              <th className="border border-gray-500 p-1">amount</th>
              <th className="border border-gray-500 p-1">percentage</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </td>
            </tr>

            <tr className="bg-gray-200">
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-400 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-400 rounded-full"></div>
              </td>
              <td className="border border-gray-500 p-2">
                <div className="h-2 bg-gray-400 rounded-full"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
