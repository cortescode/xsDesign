// import type { PageServerLoad } from './$types.js';


export function load({ cookies }) {
    let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    
    return { isLoggedIn }
    
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
