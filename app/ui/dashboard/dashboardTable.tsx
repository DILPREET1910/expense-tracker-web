export default function DashboardTable() {
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
            <tr className="bg-gray-200">
              <td className="border border-gray-500 p-1">Total</td>
              <td className="border border-gray-500 p-1 text-right"></td>
              <td className="border border-gray-500 p-1 text-right">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
