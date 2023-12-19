// project files imports
import { AddCategory, GetCategories, InsertDefaultCategories } from "@/app/lib/categories";
import { CheckFirstTime, CheckUserExists, InsertUser, ToggleFirstTime } from "@/app/lib/user";
import AddCategoryForm from "@/app/ui/dashboard/categories/addCategoriesForm";

// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

export default async function Categories() {
  const { userId } = auth();

  // check if user exists
  const userExists = await CheckUserExists(userId!);

  // if user does not exists insert user
  if(!userExists){
    await InsertUser(userId!);
  }

  // check user fist time 
  const firstTime = await CheckFirstTime(userId!);

  // insert default categories for first time users
  if(firstTime){
    await ToggleFirstTime(userId!);
    await InsertDefaultCategories(userId!);
  }

  const categories = await GetCategories(userId!);

  async function handleCreateCategory(formData:FormData){
    'use server';
    await AddCategory(userId!,formData.get("category")!.toString());
    revalidatePath('/dashboard/categories');
  }

  return(
    <div className="border-black border-4 rounded-xl p-12">
      {
        categories.map((category)=>{
          return (
            <div key={category.id}
              className="p-2 mb-2 rounded-lg hover:bg-gray-100"
            >
              {category.name}
            </div>
          );
        })
      }

      <AddCategoryForm handleCreateCategory={handleCreateCategory}/> 
    </div>
  );
}
