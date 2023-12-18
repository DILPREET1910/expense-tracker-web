// vercel imports
import { sql } from "@vercel/postgres";

export async function CheckIfExists(id:string){
  try{
    const result = await sql`SELECT EXISTS(SELECT 1 FROM categories WHERE id=${id})`;
    const row = result.rows[0];
    return row.exists;
  } catch(error){
    console.log(`Error: while checking if exists: ${error}`);
  }

  return false;
}

export async function InsertDefaultCategories(id:string){
  try{
    await sql`INSERT INTO categories VALUES (${id},ARRAY ['food','travelling','rent','bills','house old stuff'])`;
  }catch (error){
    console.log(`Error: while adding default categories: ${error}`);
  }
 }
