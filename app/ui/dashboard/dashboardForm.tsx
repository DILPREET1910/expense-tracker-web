"use client";

// react imports
import React, { useState } from "react";

// react datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DashboardForm({
  GetCategoricalData,
}: {
  GetCategoricalData: any;
}) {
  const date = new Date();

  // react hooks
  const [fromDate, setFromDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1),
  );
  const [toDate, setToDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  );

  return (
    <div className="border-4 border-gray-900 rounded-lg p-12">
      <form
        action={(formData) => {
          GetCategoricalData(formData);
        }}
      >
        <div className="flex justify-between">
          <div className="flex">
            <p>from:</p>
            <DatePicker
              name="fromDate"
              dateFormat="dd-MMM-yyyy"
              selected={fromDate}
              onChange={(newDate) => {
                setFromDate(newDate!);
              }}
              className="w-28"
            />
          </div>

          <div className="flex">
            <p>to:</p>
            <DatePicker
              name="toDate"
              dateFormat="dd-MMM-yyyy"
              selected={toDate}
              onChange={(newDate) => {
                setToDate(newDate!);
              }}
              className="w-28"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-700 text-white shadow hover:bg-gray-900 rounded-lg w-full p-1"
            >
              filter
            </button>
          </div>
        </div>
      </form>

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
    </div>
  );
}
