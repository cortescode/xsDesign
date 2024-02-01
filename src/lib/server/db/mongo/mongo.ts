import {MongoClient} from 'mongodb';
import { MONGO_URL } from '$env/static/private'; 

const client = new MongoClient(MONGO_URL)


await client.connect()

let db = client.db()
export default db


export let websites = db.collection("websites")
