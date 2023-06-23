import { addCourse } from "@/app/model/CourseService"

export default function NewCourse(){
    async function saveCourse(formData: FormData){
        'use server'
        console.log("xxxxxx")
        const id = formData.get("id")
        const name = formData.get("name") as string 
        const description = formData.get("description") as string
        await addCourse(id, name, description)
    }
    return (
        <div>
        <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600">Cadastro de Cursos</h1>
        <form action={saveCourse}>
            <input type="text" name="id" placeholder="Digite o ID do curso:"/><br/>
            <input type="text" name="name" placeholder="Digite o nome do curso:"/><br/>
            <input type="text" name="description" placeholder="Descrição do curso:"/>
            <button type="submit" className="bg-slate-600 text-white px3 p-y2 rounded-sm" >Salvar</button>
        </form>
        </div>
    )
}