export default function Aside(){
    return(
            <ul className="w-64 bg-stone-400">
                <li><a href="/admin">HOME</a></li>
                <li><a href="/admin/cordinator/new">Cadastrar Coordenadores</a><br /></li>
                <li><a href="/admin/cordinator">Listar Coordenadores</a></li>
            </ul>
    )
}