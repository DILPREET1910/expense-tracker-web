// project imports
import { GetCategories } from "@/app/lib/categories";
import { AddEntry } from "@/app/lib/entries";
import AdderForm from "@/app/ui/dashboard/add/adderForm";

// clerk imports
import { auth } from "@clerk/nextjs";

export default async function Add() {
  // get user id
  const {userId} = auth();

  // get categories for user
  const categories = await GetCategories(userId!);

  async function handleSubmit(formData:FormData){
    'use server';
    const amount = formData.get("amount")!.toString();
    const description = formData.get("description")!.toString();
    const categoryId = formData.get("selectCategory")!.toString();
    const date = formData.get("datePicker")!.toString();

    await AddEntry({user_id:userId!,category_id:categoryId,date:date,description:description,amount:amount});
  }

  return(
    <div className="border-black border-4 rounded-xl p-12">
      <AdderForm categories={categories} handleSubmit={handleSubmit}/>
    </div>
  );
}
