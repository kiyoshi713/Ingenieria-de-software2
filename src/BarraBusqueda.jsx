import "./App.css";
import { useState } from "react";
import {Usuarios} from "./Usuarios"
function BarraBusqueda() {
    const [query, setQuery] =useState("")
    console.log(query.charAt(0))
    return (
        <div className="m-50">
            <input type = "text" 
            placeholder = "Buscar tus tutores aquí" 
            className="busqueda"
            onChange={(evt) => setQuery(evt.target.value)}></input>
            <ul className="lista">
            {Usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(query)
            && usuario.nombre.charAt(0).toLocaleLowerCase() == query.charAt(0)
            ).map((usuario) => (
                <li key={usuario.id} className="itemLista">
                    {usuario.nombre} {usuario.apellido}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default BarraBusqueda;