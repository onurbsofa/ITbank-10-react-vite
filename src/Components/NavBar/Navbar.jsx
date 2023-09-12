import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
        <div>
            <h2 className="navBarLogo"><Link to="/">ITBANK</Link></h2>
        </div>
        <div>
            <ul className="navBarList">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/cuenta">Tarjetas y Cuentas</Link></li>
                <li><Link to="/ayuda">Centro de ayuda</Link></li>
                <li><Link to="/beneficios">Beneficios</Link></li>
                <li><Link to="/conversor">conversor de moneda</Link></li>
            </ul>
        </div>
        <div>
            <ul className="navBarUsuario">
                <li><Link to="/usuario">usuario</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar