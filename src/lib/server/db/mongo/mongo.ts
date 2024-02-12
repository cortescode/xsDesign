import { MongoClient } from 'mongodb';
import { MONGO_DB_URI } from '$env/static/private'; 

const client = new MongoClient(MONGO_DB_URI)


await client.connect()

let db = client.db()
export default db


export let websites = db.collection("websites")
