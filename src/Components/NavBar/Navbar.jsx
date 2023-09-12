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
        <div>
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
            <h2 className="navBarLogo"><Link to="/">ITBANK</Link></h2>
        </button>
        </div>
        <div>
          <ul className="navBarList">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/login">Usuario</Link></li>
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