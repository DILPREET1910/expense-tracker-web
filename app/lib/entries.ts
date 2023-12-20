// vercel imports
import { sql } from "@vercel/postgres";
import { GetCategoryName } from "./categories";

export async function AddEntry(
  {
    user_id,
    category_id,
    date,
    description,
    amount
  }:{
    user_id:string,
    category_id:string,
    date:string,
    description:string,
    amount:string
  }
){
  try {
    const category_name = await GetCategoryName({id:category_id});
    await sql`INSERT INTO entries (user_id,category_id,category_name,date,description,amount)
VALUES (${user_id},${category_id},${category_name},${date},${description},${amount})`; 
    return true
  } catch (erorr) {
    console.log(`Error: while adding entry: ${erorr}`); 
  }

  return false;
}

export async function GetEntries({user_id}:{user_id:string}){
  try {
    const result = await sql`SELECT * FROM entries WHERE user_id=${user_id}`; 
    return result.rows;
  } catch (erorr) {
    console.log(`Error: while getting entries: ${erorr}`); 
  }

  return [];
}
