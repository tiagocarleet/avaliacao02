import { getAllCourse } from "@/app/model/CourseService";

export const revalidate = 0

export default async function CoursePage(){
    const courses = await getAllCourse();

   

    return (
        <>
        <h1>Lista de Cursos</h1>
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
                {courses.map(course => (

                <tr key={course.ID}> <td>{course.id}</td> <td>{course.name}</td> <td>{course.description}</td> <td> <a href={`/admin/course/edit?id=${course.id}`}>Editar</a></td> </tr>

                ))}
            </tbody>
        </table>
        </>

    )
}