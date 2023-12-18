// project files imports
import { GetCategories, InsertDefaultCategories } from "@/app/lib/categories";
import { CheckFirstTime, CheckUserExists, InsertUser, ToggleFirstTime } from "@/app/lib/user";

// clerk imports
import { auth } from "@clerk/nextjs";

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

  return(
    <div>
      {
        categories.map((category)=>{
          return <h1 key={category.id}>{category.name}</h1>
        })
      }
    </div>
  );
}
