import { sql } from "@vercel/postgres";

export async function getAllCourse(){
    const { rows:courses } = await sql`SELECT * from course;`;
    return courses
}

export async function addCourse(id:string, name:string, description:string){
    await sql`INSERT INTO course values(${id}, ${name}, ${description});`
}

export async function deleteCourse(id:string){
    await sql `DELETE FROM course where id=${id};`
}

export async function getCourseById(id:string){
    const { rows:courses } = await sql `Select * FROM course where id = ${id};`
    return courses[0]
}

export async function updateCourseById(id:string, name:string, description:string){
    await sql `UPDATE course SET name = ${name}, description = ${description} WHERE id = ${id};`
}