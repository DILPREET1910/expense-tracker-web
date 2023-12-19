"use client"

import { useRef } from "react";

export default function AddCategoryForm({handleCreateCategory}:{handleCreateCategory:(formData:FormData)=>void}) {
  const ref = useRef<HTMLFormElement>(null);

  return(
    <form action={(formData)=>{
      handleCreateCategory(formData);
      ref.current?.reset();
    }}
      ref={ref}
    >
      <div className="pt-4">
        <input name="category" 
          className="border-2 border-black rounded-lg p-0.5 pl-1 w-full text-center" 
          placeholder="new category" type="text" required
        />
        <button 
          className="bg-gray-700 hover:bg-gray-900 w-full rounded-lg mt-2 p-1 text-white shadow"
          type="submit"
        >
          Add category
        </button>
      </div>
    </form>
  );
}
