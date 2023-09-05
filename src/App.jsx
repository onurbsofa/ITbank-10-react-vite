import "./App.css";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    )
}

export default App