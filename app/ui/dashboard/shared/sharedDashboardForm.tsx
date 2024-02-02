"use client";

// react imports
import React, { useState, useEffect } from "react";

// react datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// next imports
import { usePathname, useRouter } from "next/navigation";

export default function SharedDashboardForm() {
  const router = useRouter();
  const pathname = usePathname();
  const date = new Date();

  // react hooks
  const [fromDate, setFromDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1),
  );
  const [toDate, setToDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  );

  useEffect(() => {
    router.push(
      `${pathname}?from=${fromDate.toLocaleDateString()}&to=${toDate.toLocaleDateString()}`,
    );
  }, [fromDate, toDate, router, pathname]);

  return (
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
    </div>
  );
}
