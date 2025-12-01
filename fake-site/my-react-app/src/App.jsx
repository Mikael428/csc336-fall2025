
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"; // CRITICAL: Import all router components
import './App.css'; 

import Home from './Home'; 
import Register from './Register.jsx';
import Schedule from './Schedule.jsx';

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/register">Register</NavLink>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App;