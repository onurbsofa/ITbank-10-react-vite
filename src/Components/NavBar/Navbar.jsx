import { Link } from "react-router-dom"
import { useState } from "react";
import "./Navbar.css";
import SideBar from "../Side-Bar/SideBar";


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="navBar">
        <div className="itbankLogo">
          <button className="itbankboton"onClick={toggleSidebar}>
              <h2 className="navBarLogo">ITBANK</h2>
          </button>
        </div>
        <div>
          <ul className="navBarList">
            <li className="itemList"><Link to="/">Inicio</Link></li>
            <li>
              <Link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="iconoUsuario">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <SideBar 
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Navbar