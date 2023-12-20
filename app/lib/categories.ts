// vercel imports
import { sql } from "@vercel/postgres";

export async function InsertDefaultCategories(id:string){
  try{
    await sql`INSERT INTO categories (user_id,name)
VALUES (${id},'food'),
(${id},'travelling'),
(${id},'rent'),
(${id},'bills'),
(${id},'houseold stuff')`;
    return true;
  } catch(error){
    console.log(`Error: while inserting default categories: ${error}`);
  }

  return false;
}

export async function GetCategories(id:string){
  try{
    const result = await sql`SELECT * FROM categories WHERE user_id=${id}`;
    return result.rows;
  }catch (error){
    console.log(`Error: while getting categories : ${error}`);
  }

  return [];
}

export async function AddCategory(id:string, category:string){
  try {
    await sql`INSERT INTO categories (user_id,name)
VALUES (${id},${category})`;
    return true; 
  } catch (error) {
    console.log(`Error: while adding category : ${error}`) ;
  }

  return false;
}

export async function DeleteCategory(id:string){
  try {
    await sql`DELETE FROM categories WHERE id=${id}`; 
    return true;
  } catch (error) {
    console.log(`Error: while deleting category : ${error}`) ;
  }

  return false;
}

export async function GetCategoryName({id}:{id:string}){
  try {
    const result = await sql`SELECT * FROM categories WHERE id=${id}`; 
    return result.rows[0].name;
  } catch (error) {
    console.log(`Error: while getting category name: ${error}`) ;
  }

  return "";
}
