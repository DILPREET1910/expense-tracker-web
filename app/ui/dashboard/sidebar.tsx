"use client"

// clerk imports
import { UserButton, useUser } from "@clerk/nextjs";

export default function Sidebar(){
  const {user,isLoaded} = useUser();

  return(
    <div className="flex h-full flex-col px-3 py-4 md:px-2 shadow">
      <>Sidebar</>
      {isLoaded && user && 
        <UserButton afterSignOutUrl="/"/>
      }
    </div>
  );
}
