import { addCordinator } from "@/app/model/cordinatorService"
 

export default function NewCordinator(){
    async function saveCordinator(formData: FormData){
        'use server'
        console.log("xxxxxx")
        const id = formData.get("id")
        const name = formData.get("name") as string 
        const description = formData.get("description") as string
        await addCordinator(id, name, description)
    }
    return (
        <div>
        <h1 className="bg-slate-600 md:bg-red-700 xl:bg-green-600">Cadastro de Coordenadores</h1>
        <form action={saveCordinator}>
            <input type="text" name="id" placeholder="Digite o ID:"/><br />
            <input type="text" name="name" placeholder="Digite o nome:"/><br />
            <input type="text" name="description" placeholder="Digite o email:"/>
            <button type="submit" className="bg-slate-600 text-white px3 p-y2 rounded-sm" >Salvar</button>
        </form>
        </div>
    )
}