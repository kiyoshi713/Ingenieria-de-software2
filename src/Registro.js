import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Caracteres regulares para el usuario y contrasenya
const usuario_regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const contra_regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const Registro = () => {

    const usuarioRef = useRef();
    const errorRef = useRef();

    //Hooks usuario
    const [usuario, setUsuario] = useState('');
    const [usuarioValido, setUsuarioValido] = useState(false);
    const [usuarioFocus, setUsuarioFocus] = useState(false);

    //Hooks constrasenya
    const [contra, setContra] = useState('');
    const [contraValido, setContraValido] = useState(false);
    const [contraFocus, setContraFocus] = useState(false);

    //Hooks repetir contrasenya
    const [repetirC, setRepetirC] = useState('');
    const [repetirCValido, setRepetirCValido] = useState(false);
    const [repetirCFocus, setRepetirCFocus] = useState(false);

    //Hooks comprobar errores
    const [msgError, setMsgError] = useState('');
    const [correcto, setCorrecto] = useState(false);

    // Efecto para encontrar el campo donde se encuentra enfocado 
    useEffect(() => {
        useRef.current.focus();
    }, [])

    // Prueba de nombre de usuario valido, en la consola
    useEffect(() => {
        const resultado = usuario_regex.test(usuario);
        console.log(resultado);
        console.log(usuario);
        setUsuarioValido(resultado);
    }, [usuario])

    return (
        <div>

        </div>
    )
}