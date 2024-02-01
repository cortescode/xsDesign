import { websites } from "$lib/server/db/mongo/mongo.js";
import { redirect } from "@sveltejs/kit";
// import type { LayoutServerLoad } from "./$types.js";


export async function load({ cookies }) {

	let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    let user_uid: string | undefined = cookies.get('user_uid')
    
    if(!isLoggedIn || !user_uid) {
        throw redirect(302, "/auth/login")
    }

    let user_websites = await websites.find({
        "user_uid": user_uid
    }).toArray()

    
    return {
        isLoggedIn,
        user_uid,
        "websites": JSON.stringify(user_websites)
    }
}


/* import { db, sql, Client } from "@vercel/postgres";
import dotenv from "dotenv"
dotenv.config()

export async function load({ locals }) {
  
  const client = await db.connect();
  await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
  const names = ['Fiona', 'Lucy'];
  await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  
  let pets = await client.sql`SELECT * FROM Pets;`;
  
  pets = pets.rows.map((pet) => ({ name: pet.name, owner: pet.owner }))
  return {
      data: {"pets": pets}
  }
} */
