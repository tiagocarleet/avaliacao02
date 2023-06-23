import { getAllCordinator } from "@/app/model/cordinatorService";

export const revalidate = 0

export default async function CordinatorPage(){
    const cordinators = await getAllCordinator();   

    return (
        <>
        <h1>Lista de Coordenadores</h1>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Ação</td>
                </tr>
            </thead>
            <tbody>
                {cordinators.map(cordinator => (

                <tr key={cordinator.ID}> <td>{cordinator.id}</td> <td>{cordinator.name}</td> <td>{cordinator.email}</td> <td> <a href={`/admin/cordinator/edit?id=${cordinator.id}`}>Editar</a></td> </tr>

                ))}
            </tbody>
        </table>
        </>

    )
}