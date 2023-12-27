"use client"

// react imports
import React, { useState } from "react";

// react datepicker imports
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

//react imports
import { useRef } from "react";

// vercel imports
import { QueryResultRow } from "@vercel/postgres";

export default function AdderForm(
  {
    categories,handleSubmit
  }:{
    categories:QueryResultRow[],
    handleSubmit:(formData:FormData) => void
  }
){
  // date
  const [date,setDate] = useState(new Date());

  const ref = useRef<HTMLFormElement>(null);

  return(
    <form action={
      (formData)=>{
        handleSubmit(formData);
        ref.current?.reset();
      }
    }
      ref={ref}
    >
      <div className="flex flex-row">
        <DatePicker name="datePicker" selected={date} onChange={(newDate)=>setDate(newDate!)}/>
        <select 
          name="selectCategory"
          className="ml-auto bg-white" 
          required
          defaultValue={""}
        >
          <option disabled value={""}>Select Category</option>
          {
            categories.map((category)=>{
              return(
                <option 
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              );
            })
          }
        </select>
      </div>

      <div className="pt-8">
        <label className="block ml-1">Amount*</label>
        <input required  name="amount" 
          className="border-2 border-black rounded-lg p-0.5 pl-1 w-full" 
          placeholder="100₹" type="number"/>
      </div>

      <div className="pt-4">
        <label className="block ml-1">Description</label>
        <input name="description" 
          className="border-2 border-black rounded-lg p-0.5 pl-1 w-full" 
          placeholder="description if any" type="text"/>
      </div>

      <div className="pt-8">
        <button type="submit" className="bg-gray-700 text-white shadow hover:bg-gray-900 rounded-lg w-full p-1">Add</button>
      </div>
    </form>
  );
}
