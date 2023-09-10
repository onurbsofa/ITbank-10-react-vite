import "./App.css";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SideBar from "./Components/Side-Bar/SideBar";
import Footer from './Components/Footer/Footer';
import About from './Components/Footer/About';
import Contact from './Components/Footer/Contact';
import Faq from './Components/Footer/Faq';
import Privacy from './Components/Footer/Privacy';
import Terms from './Components/Footer/Terms';
import PaginaPrincipal from "./Components/Pagina-Principal/PaginaPrincipal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer/>
    </Router>
    )
}

export default App