import { config } from 'dotenv';
import dummyBooks from '../dummyBooks.json';   
// import { db } from './drizzle';
import { books } from './schema';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


config({ path: '.env.local'})

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle({client: sql})

const seed = async () => {
    console.log("Seeding data....")

    try {
        for(const book of dummyBooks){
            await db.insert(books).values({
                ...book,

            })
            console.log("Data seeded successfully")
        }
    } catch (error) {
        console.log("Error while seeding data:", error)
    }
}  

seed();