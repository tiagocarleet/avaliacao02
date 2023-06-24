import { deleteCourseById, getCourseById, updateCourseById } from "@/app/model/CourseService";
import { deleteCordinatorById, getCordinatorById, updateCordinatorById } from "@/app/model/cordinatorService";
import { redirect } from "next/navigation";

export default async function EditCourse(params:any){
    
    const id = params.searchParams.id;
    const course = await getCordinatorById(id);

    async function deleteCordinator(){
        'use server';
        await deleteCordinatorById(id);
        redirect('/admin/cordinator')

    }

    async function updateCordinator(formData: FormData){
        'use server'
        
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        await updateCordinatorById(id, name, description)
        redirect('/admin/cordinator')

    }
    
    return(
        <>
        <h1>Editar Coordenador</h1>
        <form action="">
                <input type="text" name="name" defaultValue = {course.name} placeholder="Digite o nome do Curso" />
                <input type="text" name="description" defaultValue = {course.description} placeholder="Digite a descrição do Curso" />
                <button formAction={updateCordinator} className="bg-slate-600 text-white px-3 py-2 rounded-sm">Salvar</button>
                <button formAction={deleteCordinator} className="bg-red-600 text-white px-3 py-2 rounded-sm">Excluir</button>
        </form>
        </>
    )
}