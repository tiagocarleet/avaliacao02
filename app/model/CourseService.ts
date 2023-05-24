import { sql } from "@vercel/postgres";

export async function getAllCourse(){
    const { rows:courses } = await sql`SELECT * from course;`;
    return courses
}

export async function addCourse(ID:string, name:string, description:string){
    await sql`INSERT INTO course values(${ID}, ${name}, ${description});`
}

export async function deleteCourse(id:string){
    await sql `DELETE FROM course where id=${id};`
}

export async function updateCourse(id:string){
    await sql `UPDATE course SET name = 'newName' WHERE id = ${id};`
}