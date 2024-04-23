// project files imports
import {
  AddCategory,
  DeleteCategory,
  GetCategories,
  InsertDefaultCategories,
} from "@/app/lib/categories";
import {
  CheckFirstTime,
  CheckUserExists,
  InsertUser,
  ToggleFirstTime,
} from "@/app/lib/user";
import AddCategoryForm from "@/app/ui/dashboard/categories/addCategoriesForm";
import CategoryTile from "@/app/ui/dashboard/categories/categoryTile";

// clerk imports
import { auth } from "@clerk/nextjs";

// next js imports
import { revalidatePath } from "next/cache";

export default async function CategoriesDataFetcher() {
  const { userId } = auth();

  const categories = await GetCategories(userId!);

  async function handleCreateCategory(formData: FormData) {
    "use server";
    await AddCategory(userId!, formData.get("category")!.toString());
    revalidatePath("/dashboard/categories");
  }

  async function handleOnDelete({ id }: { id: string }) {
    "use server";
    await DeleteCategory(id);
    revalidatePath("/dashboard/categories");
  }

  return (
    <div className="border-black border-4 rounded-xl p-12">
      {categories.map((category) => {
        return (
          <CategoryTile
            key={category.id}
            name={category.name}
            id={category.id}
            handleOnDelete={handleOnDelete}
          />
        );
      })}

      <AddCategoryForm handleCreateCategory={handleCreateCategory} />
    </div>
  );
}
