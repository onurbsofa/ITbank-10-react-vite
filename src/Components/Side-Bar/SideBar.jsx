import './SideBar.css'

export default function SideBar() {
  return (
    <div id="sidebar">
            <section id="sidebar">
            <div className="sidebar-component">
            <h3 className="component-title">nombre de usuario</h3>
            <img src="" alt=""></img>
            </div>
            <div className="sidebar-component">
            <h3 className="component-title">Menú</h3>
            <ul>
                <li><a href="../principal/principal.html"><button>Página Principal</button></a></li>
                <li><a href="../principal/cuenta.html"><button>Mi Cuenta</button></a></li>
                <li><a href="../formularios/formulario-transaccion.html"><button>Transferencias</button></a></li>
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
