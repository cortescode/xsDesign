import { db, type VercelPoolClient } from '@vercel/postgres';
import dotenv from 'dotenv'
dotenv.config()


export async function getClient() {
    return await db.connect();
}

async function startDatabase() {
    const client = await getClient();
    // Feedback table
    await client.sql`
    CREATE TABLE IF NOT EXISTS feedback ( 
        user_uid varchar(255), 
        message varchar(255)
    );
    `;
    
    // Plan type
    await client.sql`
    DO $$ BEGIN
        CREATE TYPE plan_type AS ENUM ('starter', 'professional', 'business');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    `;
    

    // Customers table
    await client.sql`
    CREATE TABLE IF NOT EXISTS customers ( 
        user_uid varchar(255) PRIMARY KEY, 
        customer_id varchar(255),
        subscription_id varchar(255),
        plan plan_type NOT NULL DEFAULT 'starter'
    );
    `;
    
}
try {
    startDatabase()
} catch(e) {
    console.log("Error starting database: ", e)
}