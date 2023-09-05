import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
    const [nombreUsuario, setNombreUsuario] = useState();
    const [contraseniaUsuario, setContraseniaUsuario] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(nombreUsuario.length >= 5 && nombreUsuario.length <=12){
            alert(`Usuario creado!`);
        } else {
            alert("su usuario debe contener entre 5 y 12 letras.");
        }

    }
  return (
    <div className="contenedorFormulario">
        <form onSubmit={handleSubmit} className="formularioLogin">
            <div className="registrarse">
                <h3>REGISTRARSE</h3>
            </div>
            <label className="labelUsuario">Usuario</label>
            <input className="inputUsuario" type="text"  name="usuario"  placeholder="ingrese un usuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
            <label className="labelContrasenia">Contraseña</label>
            <input className="inputContrasenia" type="password" name="contraseña"  placeholder="ingrese una contraseña" value={contraseniaUsuario} onChange={(e) => setContraseniaUsuario(e.target.value)}/>
            <button type="submit" className="botonFormulario">Enviar</button>
        </form>
        <p className="textoRegistroCuenta">¿Ya tienes una cuenta? <b>Inicia sesión.</b></p>
    </div>
  )
}

export default SignIn