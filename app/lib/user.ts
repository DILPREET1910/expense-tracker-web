// vercel imports
import { sql } from "@vercel/postgres";

// uuid generator imports
import { v4 as uuidv4 } from "uuid";

export async function CheckUserExists(id: string) {
  try {
    const result = await sql`SELECT EXISTS(SELECT 1 FROM users WHERE id=${id})`;
    const row = result.rows[0];
    return row.exists;
  } catch (error) {
    console.log(`Error: while checking user exists : ${error}`);
  }

  return false;
}

export async function InsertUser(id: string) {
  try {
    await sql`INSERT INTO users (id, first_time, public_key) 
VALUES(${id},TRUE, ${uuidv4()})`;
    return true;
  } catch (error) {
    console.log(`Error: while inserting user : ${error}`);
  }

  return false;
}

export async function CheckFirstTime(id: string) {
  try {
    const result = await sql`SELECT * FROM users WHERE id=${id}`;
    const row = result.rows[0];
    return row.first_time;
  } catch (error) {
    console.log(`Error: while checking user first time : ${error}`);
  }

  return false;
}

export async function ToggleFirstTime(id: string) {
  try {
    const result = await sql`SELECT * FROM users WHERE id=${id}`;
    const row = result.rows[0];
    const first_time = !row.first_time;
    await sql`UPDATE users SET first_time=${first_time} WHERE id=${id}`;
    return true;
  } catch (error) {
    console.log(`Error: while toggling user first time : ${error}`);
  }

  return false;
}

export async function GetPublicKey({ id }: { id: string }) {
  try {
    const result = await sql`SELECT * FROM users WHERE id=${id}`;
    const row = result.rows[0];
    const publicKey = row.public_key;
    return publicKey;
  } catch (error) {
    console.log(`Error: while getting public key: ${error}`);
  }

  return "";
}
