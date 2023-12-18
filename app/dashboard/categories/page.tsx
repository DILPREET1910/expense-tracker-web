// project files imports
import { CheckIfExists, InsertDefaultCategories } from "@/app/lib/categories";

// clerk imports
import { auth } from "@clerk/nextjs";

export default async function Categories() {
  const { userId } = auth();

  // get if user has categories
  const existsCheck = await CheckIfExists(userId!);


  // if user not present add default categories
  if(!existsCheck){
    InsertDefaultCategories(userId!);
  }  

  return(
    <div>Categories</div>
  );
}
