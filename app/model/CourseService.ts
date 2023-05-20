import { sql } from "@vercel/postgres";

export async function getAllCourse(){
    const { rows:students } = await sql`SELECT * from course;`;
    return students
}