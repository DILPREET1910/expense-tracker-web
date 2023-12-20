// project imports
import { GetCategories } from "@/app/lib/categories";
import AdderForm from "@/app/ui/dashboard/add/adderForm";

// clerk imports
import { auth } from "@clerk/nextjs";

export default async function Add() {
  // get user id
  const {userId}=auth();

  // get categories for user
  const categories = await GetCategories(userId!);

  return(
    <div className="border-black border-4 rounded-xl p-12">
      <AdderForm categories={categories}/>
    </div>
  );
}
