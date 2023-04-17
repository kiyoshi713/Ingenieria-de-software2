import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
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

    const AsyncRegistrarse = async (evt) => {
        evt.preventDefault();
        console.log(usuario, contra, repetirC);
        setCorrecto(true)
    }
    return (
        <section>
            <h1>Registro de Usuario</h1>
            <form>
                <label htmlFor="usuario">
                    Usuario:
                    <span className={usuarioValido ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                    <span className={usuarioValido ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </span>
                </label>
                <input 
                    type="text"
                    id="usuario"
                    ref={usuarioRef}
                    autoComplete="off"
                    onChange={(evt) => setUsuario(evt.target.value)}
                    required
                    aria-invalid={usuarioValido ? "false" : "true"}
                    onFocus={() => setUsuarioFocus(true)}
                    onBlur={() => setUsuarioFocus(false)}>
                </input>
                <label htmlFor="contra">
                    Contraseña:
                    <span className={contraValido ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                    <span className={contraValido ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </span>
                </label>
                <input 
                    type="password"
                    id="contra"
                    onChange={(evt) => setContra(evt.target.value)}
                    required
                    aria-invalid={contraValido ? "false" : "true"}
                    onFocus={() => setContraFocus(true)}
                    onBlur={() => setContraFocus(false)}>
                </input>
                <label htmlFor="repetirC">
                    Confirmar contraseña:
                    <span className={repetirCValido && repetirC  ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                    <span className={repetirCValido || repetirC ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </span>
                </label>
                <input 
                    type="password"
                    id="repetirC"
                    onChange={(evt) => setRepetirC(evt.target.value)}
                    required
                    aria-invalid={repetirCValido ? "false" : "true"}
                    onFocus={() => setRepetirCFocus(true)}
                    onBlur={() => setRepetirCFocus(false)}>
                </input>
                <button>disabled={!usuarioValido || !contraValido || !repetirCValido ? true : false}
                Registrarse
                </button>
            </form>
        </section>
    )
}