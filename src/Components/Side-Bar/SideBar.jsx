
import { Link } from 'react-router-dom';
import './SideBar.css';
import NameComponent from './NameComponent';

const SideBar = ({ isOpen, toggleSidebar }) => {

  return (
    <div id="sidebar" className={isOpen ? 'open' : ''}>
        <div className='sidebar-itbank'>
          <button className="sidebar-toggle-button" onClick={toggleSidebar}>
              <h2>ITBANK</h2>
          </button>
        </div>
      <section className="sidebar-container">
        <div className="sidebar-component">
          <NameComponent className="component-title" isLoggedIn={true} username={'bruno'} />
        </div>
        <div className="sidebar-component">
          <h3 className="component-title">Menú</h3>
            <ul>
              <li><Link to='/'><button className='botonesSideBar'>Página Principal</button></Link></li>
              <li><Link to='/mi-cuenta'><button className='botonesSideBar'>Mi Cuenta</button></Link></li>
              <li><Link to='/transferencias'><button className='botonesSideBar'>Transferencias</button></Link></li>
            </ul>
        </div>
        <div className="sidebar-component">
          <h3 className="component-title">Servicios</h3>
            <ul>
              <li><Link to='/conversor'><button className='botonesSideBar'>Conversor de moneda</button></Link></li>
              <li><button className='botonesSideBar'>Ayuda</button></li>
            </ul>
        </div>
      </section>
    </div>
  );
};
{/* <div id="sidebar">
            <div className="botonPaginaPrincipal">
              <button><Link to='/'>Página Principal</Link></button>
            </div>
            <section className="sidebar-container">  
        </section>
    </div> */} // no se para que sirve esto
export default SideBar;