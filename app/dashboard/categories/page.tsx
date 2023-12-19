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
              className="p-2 mb-2 rounded-lg hover:bg-gray-100 flex flex-row"
            >
              <p className="mr-auto">
                {category.name}
              </p>

              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataslot="icon" className="w-6 h-6 text-gray-700 hover:text-yellow-500 duration-100">
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
              </button>

              <button className="ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" dataslot="icon" className="w-6 h-6 text-gray-700 hover:text-red-500 duration-100">
                  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          );
        })
      }

      <AddCategoryForm handleCreateCategory={handleCreateCategory}/> 
    </div>
  );
}
