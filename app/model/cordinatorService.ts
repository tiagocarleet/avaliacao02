import { sql } from "@vercel/postgres";

export async function getAllCordinator(){
    const { rows:cordinator } = await sql`SELECT * from cordinators;`;
    return cordinator
}

export async function addCordinator(id:string, name:string, email:string){
    await sql`INSERT INTO cordinators values(${id}, ${name}, ${email});`
}

export async function deleteCordinatorById(id:string){
    console.log("xxx");
    await sql `DELETE FROM cordinators where id=${id};`
}

export async function getCordinatorById(id:string){
    const { rows:cordinators } = await sql `Select * FROM cordinators where id = ${id};`
    return cordinators[0]
}

export async function updateCordinatorById(id:string, name:string, email:string){
    console.log("entrou na update");
    await sql `UPDATE cordinators SET name = ${name}, email = ${email} WHERE id = ${id};`
}