import "./App.css";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SideBar from "./Components/Side-Bar/SideBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </Router>
    )
}

export default App