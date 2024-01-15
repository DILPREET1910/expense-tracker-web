"use client";

// react imports
import React, { useState } from "react";

// react datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// project files imports
import { global } from "@/global";

export default function DashboardForm({
  revalidate,
  categoricalData,
}: {
  revalidate: any;
  categoricalData: Map<string, number>;
}) {
  const date = new Date();

  // react hooks
  const [fromDate, setFromDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1),
  );
  const [toDate, setToDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  );

  // manage categorical data
  let total = 0;
  let categoricalArray: any = [];
  categoricalData.forEach((value: number, key: string) => {
    total += value;
    categoricalArray.push({ key, value });
  });

  return (
    <div className="border-4 border-gray-900 rounded-lg p-12">
      <div className="flex flex-row">
        <div className="flex flex-row">
          <p>from:</p>
          <DatePicker
            name="fromDate"
            dateFormat="dd-MMM-yyyy"
            selected={fromDate}
            onChange={(newDate) => {
              setFromDate(newDate!);
              global.fromDate = newDate!;
              revalidate();
            }}
            className="w-28"
          />
        </div>

        <div className="ml-auto flex flex-row">
          <p>to:</p>
          <DatePicker
            name="toDate"
            dateFormat="dd-MMM-yyyy"
            selected={toDate}
            onChange={(newDate) => {
              setToDate(newDate!);
              global.toDate = newDate!;
              revalidate();
            }}
            className="w-28"
          />
        </div>
      </div>

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
                    <td className="border border-gray-500 p-1">
                      {element.key}
                    </td>
                    <td className="border border-gray-500 p-1 text-right">
                      {element.value}
                    </td>
                    <td className="border border-gray-500 p-1 text-right">
                      {((element.value / total) * 100).toFixed(2)}%
                    </td>
                  </tr>
                );
              })}

              <tr className="bg-gray-200">
                <td className="border border-gray-500 p-1">Total</td>
                <td className="border border-gray-500 p-1 text-right">{total}</td>
                <td className="border border-gray-500 p-1 text-right">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
