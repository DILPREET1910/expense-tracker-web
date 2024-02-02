// clerk imports
import { clerkClient } from "@clerk/nextjs";

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
  const emptyArray: any = [];
  try {
    await sql`INSERT INTO users (id, first_time, public_key, shared_keys) 
VALUES(${id},TRUE, ${uuidv4()},${emptyArray})`;
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

export async function AddSharedKey({
  id,
  shared_key,
}: {
  id: string;
  shared_key: string;
}) {
  try {
    await sql`UPDATE users SET shared_keys = array_append(shared_keys,${shared_key}) WHERE id=${id}`;
    return true;
  } catch (error) {
    console.log(`Error: while adding shared key: ${error}`);
  }

  return false;
}

export async function GetSharedKeys({ id }: { id: string }) {
  try {
    const result = await sql`SELECT * FROM users WHERE id=${id}`;
    const row = result.rows[0];
    const shared_keys = row.shared_keys;
    return shared_keys;
  } catch (error) {
    console.log(`Error: while getting shared keys: ${error}`);
  }
  return [];
}

export async function GetSharedUserProfileData({
  shared_keys,
}: {
  shared_keys: any;
}) {
  const shared_user_profile_data: any = [];

  /*
   * this is the function, wehre I came to know how much javascript is fucked up
   * basically impelemented for-in loop instead of the normal for loop.
   * got unexpected behaviour, did some googleing, binge read and watch all the articles and videos
   * on how javascirpt is so messed up, and still it is the browser standard :clown:
   */
  for (var i = 0; i < shared_keys.length; i++) {
    const public_key = shared_keys[i];
    if (public_key != "") {
      try {
        // get shared user id
        const result =
          await sql`SELECT * FROM users WHERE public_key=${public_key}`;
        const row = result.rows[0];
        const userId = row.id;

        // get User object from clerk
        const user = await clerkClient.users.getUser(userId);
        shared_user_profile_data.push([
          user.imageUrl,
          user.firstName,
          user.lastName,
          public_key,
        ]);
      } catch (error) {
        console.log(`Error: while getting shared user profile data: ${error}`);
      }
    }
  }

  return shared_user_profile_data;
}

export async function CheckValidSharedSlug({
  id,
  public_key,
}: {
  id: string;
  public_key: string;
}) {
  try {
    const shared_keys = await GetSharedKeys({ id: id });
    return shared_keys.includes(public_key);
  } catch (error) {
    console.log(`Error: while checking valid shared page slug: ${error}`);
  }

  return false;
}

export async function GetSharedUserId({ public_key }: { public_key: string }) {
  try {
    const result =
      await sql`SELECT * FROM users WHERE public_key=${public_key}`;
    const row = result.rows[0];
    const userId = row.id;
    return userId;
  } catch (error) {
    console.log(`Error: while getting shared user id: ${error}`);
  }

  return false;
}

export async function GetSingleSharedUserProfileData({
  public_key,
}: {
  public_key: string;
}) {
  try {
    const userId = await GetSharedUserId({ public_key: public_key });
    const user = await clerkClient.users.getUser(userId!);
    return [user.imageUrl, user.firstName, user.lastName];
  } catch (error) {
    console.log(
      `Error: while getting single shared user profile data: ${error}`,
    );
  }

  return [];
}
