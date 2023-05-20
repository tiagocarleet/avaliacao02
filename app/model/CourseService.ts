import { sql } from "@vercel/postgres";

export async function getAllCourse(){
    const { rows:courses } = await sql`SELECT * from course;`;
    return courses
}

export async function addCourse(ID:string, name:string, description:string){
    await sql`INSERT INTO course values(${ID}, ${name}, ${description});`
}