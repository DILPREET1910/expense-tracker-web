// project files imports
import { CheckIfExists, GetCategories, InsertDefaultCategories } from "@/app/lib/categories";

// clerk imports
import { auth } from "@clerk/nextjs";

export default async function Categories() {
  const { userId } = auth();

  // get if user has categories
  const existsCheck = await CheckIfExists(userId!);


  // if user not present add default categories
  if(!existsCheck){
    await InsertDefaultCategories(userId!);
  }  

  // get categories
  const categories = await GetCategories(userId!);

  return(
    <div>
      {
        categories.map((element:string)=> {
          return(<h1 key={element}>{element}</h1>);
        })
      }
    </div>
  );
}
