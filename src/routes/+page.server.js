import { sql } from "@vercel/postgres";

export async function load({ locals }) {
  await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`
  return {
    data: {"message": "hola"}
  }
}