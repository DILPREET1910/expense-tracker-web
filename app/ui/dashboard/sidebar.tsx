"use client";

// clerk imports
import { UserButton, useUser } from "@clerk/nextjs";

// next imports
import Link from "next/link";
import { usePathname } from "next/navigation";

// clsx imports
import clsx from "clsx";

// react imports
import { useState } from "react";

// react icons
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

export default function Sidebar() {
  const { user, isLoaded } = useUser();
  const [menu, setMenu] = useState(false);

  const links = [
    { key: 1, name: "Dashboard", href: "/dashboard" },
    { key: 2, name: "Add Entries", href: "/dashboard/add" },
    { key: 3, name: "Data Entries", href: "/dashboard/entries" },
    { key: 4, name: "Categories", href: "/dashboard/categories" },
    { key: 5, name: "Shared with You", href: "/dashboard/shared" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 shadow">
      {links.map((element) => {
        return (
          <Link
            key={element.key}
            href={element.href}
            className={clsx("p-2 rounded-lg hover:bg-sky-50 hidden md:block", {
              "bg-sky-200 hover:bg-sky-200": pathname == element.href,
              "sm:block": menu === true,
            })}
          >
            <p className="text-lg font-semibold">{element.name}</p>
          </Link>
        );
      })}

      {isLoaded && user && (
        <div
          className={clsx(
            "mt-auto flex flex-row items-center p-2 rounded-lg hover:bg-sky-50",
            {
              "hover:bg-sky-200 bg-sky-200 ": pathname == "/dashboard/profile",
            },
          )}
        >
          <UserButton afterSignOutUrl="/" />
          <Link href="/dashboard/profile" className="pl-2 flex w-full">
            <p className="text-lg font-semibold">Profile</p>
          </Link>
          {menu ? (
            <IoIosArrowUp
              className="text-2xl md:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            <IoMenuSharp
              className="text-2xl md:hidden"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
