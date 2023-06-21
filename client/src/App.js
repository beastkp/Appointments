import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from './pages/Contact'
import Work from './pages/Service'
import Appointment from "./pages/Appointment";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/services" element={<Work/>} />        
        <Route path="/appointment" element={<Appointment/>} />        

      </Routes>
    </Router>
  );
}

export default App;
