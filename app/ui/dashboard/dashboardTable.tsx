export default function DashboardTable({
  categoricalData,
}: {
  categoricalData: Map<string, number>;
}) {
  // manage categorical data
  let total = 0;
  let categoricalArray: any = [];
  categoricalData.forEach((value: number, key: string) => {
    total += value;
    categoricalArray.push({ key, value });
  });

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
            {categoricalArray.map((element: any) => {
              return (
                <tr key={element.key}>
                  <td className="border border-gray-500 p-1">{element.key}</td>
                  <td className="border border-gray-500 p-1 text-right">
                    {element.value.toLocaleString()}
                  </td>
                  <td className="border border-gray-500 p-1 text-right">
                    {((element.value / total) * 100).toFixed(2)}%
                  </td>
                </tr>
              );
            })}

            <tr className="bg-gray-200">
              <td className="border border-gray-500 p-1">Total</td>
              <td className="border border-gray-500 p-1 text-right">{total.toLocaleString()}</td>
              <td className="border border-gray-500 p-1 text-right">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
