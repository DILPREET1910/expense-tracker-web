"use client";

// vercel imports
import { QueryResultRow } from "@vercel/postgres";

export default function DataTable({ entries }: { entries: QueryResultRow[] }) {
  console.log(entries);
  return (
    <div className="border-4 border-gray-900 rounded-lg">
      <table className="w-full">
        <thead className="text-left">
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-1">date</th>
            <th className="border border-gray-500 p-1">category</th>
            <th className="border border-gray-500 p-1">description</th>
            <th className="border border-gray-500 p-1">amount</th>
          </tr>
        </thead>

        <tbody>
          {entries.map((entry) => {
            return (
              <tr key={entry.id}>
                <td className="border border-gray-500 pl-1">{entry.date.toLocaleDateString()}</td>
                <td className="border border-gray-500 pl-1">
                  {entry.category_name}
                </td>
                <td className="border border-gray-500 pl-1">
                  {entry.description}
                </td>
                <td className="border border-gray-500 pl-1 text-right pr-1">
                  {parseInt(entry.amount).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
