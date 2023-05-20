import { sql } from "@vercel/postgres";

export async function getAllCourse(){
    const { rows:courses } = await sql`SELECT * from course;`;
    return courses
}