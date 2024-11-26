import { getClient } from '$lib/server/db/postgresql/postgresql';
import { error, json } from '@sveltejs/kit';
import { db } from '@vercel/postgres';

import dotenv from 'dotenv'
dotenv.config()


export async function GET({ request, cookies }) {
    const user_uid = cookies.get('user_uid')

    if(!user_uid)
        throw error(403, "You cannot access this route")

    try {
        
        const client = await getClient();
        let feedback_db_result = await client.sql`SELECT * FROM feedback;`
    
        const feedback = feedback_db_result.rows.map((feedback_message) => {
            console.log(feedback_message)
            return ({ message: feedback_message.message })
        })
        
        return json({ "feedback": feedback }, { status: 200 })
    } catch(e) {
        error(500, "An error occourred obtaining feedback from database")
    }
}


export async function POST({ request, cookies }) {
    const user_uid = cookies.get('user_uid')

    let request_json = await request.json()
    let message = request_json["message"]

    if(!user_uid || !message)
        error(403, "There was an error adding the feedback")


    try {
        const client = await getClient();
        // await client.sql`CREATE TABLE IF NOT EXISTS feedback ( UserUid varchar(255), Message varchar(255));`;
    
        const newFeedback = await client.sql`
                INSERT INTO feedback (UserUid, Message)
                VALUES (${user_uid}, ${message}) 
                RETURNING *;
        `
    
        return json({ "feedback": newFeedback }, { status: 200 })
        
    } catch (e){
        error(500, "An error occourred adding feedback to database")
    }
    
}

