// vercel imports
import { sql } from "@vercel/postgres";

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
    await sql`INSERT INTO entries (user_id,category_id,date,description,amount)
VALUES (${user_id},${category_id},${date},${description},${amount})`; 
    return true
  } catch (erorr) {
    console.log(`Error: while adding entry: ${erorr}`); 
  }

  return false;
}
