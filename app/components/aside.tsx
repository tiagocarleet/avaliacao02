export default function Aside(){
    return(
            <ul className="w-64 bg-stone-400">
                <li><a href="/admin/course">HOME</a></li>
                <li><a href="/admin/course/new">Cadastrar Cursos</a><br /></li>
                <li><a href="/admin/course">Listar Cursos</a></li>
                <li><a href="/admin/course">Cadastrar Professores</a></li>
            </ul>
    )
}