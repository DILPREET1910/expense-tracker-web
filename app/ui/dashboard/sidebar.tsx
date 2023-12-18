"use client"

// clerk imports
import { UserButton, useUser } from "@clerk/nextjs";

// next imports
import Link from "next/link";
import { usePathname } from "next/navigation"; 

// clsx imports
import clsx from "clsx";

export default function Sidebar(){
  const {user,isLoaded} = useUser();

  const links = [
    {key:1, name:"Dashboard",href:"/dashboard"},
    {key:2, name:"Add Entries",href:"/dashboard/add"},
    {key:3, name:"Data Entries",href:"/dashboard/entries"},
    {key:4, name:"Categories",href:"/dashboard/categories"},
  ];

  const pathname = usePathname();

  return(
    <div className="flex h-full flex-col px-3 py-4 md:px-2 shadow">
      {
        links.map((element)=>{
          return (
            <Link key={element.key} href={element.href}
              className={clsx( "p-2 rounded-lg hover:bg-sky-50" ,
                {"bg-sky-200 hover:bg-sky-200":pathname==element.href},
              )}
            >{element.name}</Link>
          );
        })
      }

      {isLoaded && user && 
        <div className="mt-auto flex flex-row items-center">
          <UserButton afterSignOutUrl="/"/>
          <p className="pl-2">Profile</p>
        </div>
      }
    </div>
  );
}
