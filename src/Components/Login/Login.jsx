import { useState } from "react"
import "./Login.css"

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState();
    const [contraseniaUsuario, setContraseniaUsuario] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(nombreUsuario.length >= 5 && nombreUsuario.length <=12){
            alert(`Bienvenido ${nombreUsuario}`);
        } else {
            alert("su usuario debe contener entre 5 y 12 letras.");
        }

    }

  return (
    <div className="contenedorFormulario">
        <form onSubmit={handleSubmit} className="formularioLogin">
            <div className="iniciarSesion">
                <h3>INICIAR SESIÓN</h3>
            </div>
            <label className="labelUsuario">Usuario</label>
            <input className="inputUsuario" type="text"  name="usuario"  placeholder="ingrese su usuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
            <label className="labelContrasenia">Contraseña</label>
            <input className="inputContrasenia" type="password" name="contraseña"  placeholder="ingrese su contraseña" value={contraseniaUsuario} onChange={(e) => setContraseniaUsuario(e.target.value)}/>
            <button type="submit" className="botonFormulario">Enviar</button>
        </form>
        <p className="textoRegistroCuenta">¿No tienes una cuenta? <b>Regístrate.</b></p>
    </div>
  )
}

export default Login