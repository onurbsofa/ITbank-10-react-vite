import './SideBar.css'
import {Link} from 'react-router-dom'

export default function SideBar() {
  return (
    <div id="sidebar">
            <div className="botonPaginaPrincipal">
              <button><Link to='/'>Página Principal</Link></button>
            </div>
            <section className="sidebar-container">
              <div className="sidebar-component">
                <h3 className="component-title">nombre de usuario</h3>
                <img src="" alt=""></img>
              </div>
              <div className="sidebar-component">
                <h3 className="component-title">Menú</h3>
                <ul>
                    <li><Link to='/'><button>Página Principal</button></Link></li>
                    <li><Link to='/mi-cuenta'><button>Mi Cuenta</button></Link></li>
                    <li><Link to='/transferencias'><button>Transferencias</button></Link></li>
                </ul>
              </div>
              <div className="sidebar-component">
                <h3 className="component-title">Servicios</h3>
                <ul>
                    <li><a href="../servicios/conversor-moneda/conversor-moneda.html"><button>Conversor de moneda</button></a></li>
                    <li><a href="../servicios/calculadora-prestamo/calculadora-prestamo.html"><button>Calculadora de prestamo</button></a></li>
                    <li><a href=""><button>Ayuda</button></a></li>
                </ul>
            </div>
        </section>
    </div>
  )
}
