import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private'; 

const client = new MongoClient(MONGODB_URI)


await client.connect()

let db = client.db()
export default db


export let websites = db.collection("websites")
