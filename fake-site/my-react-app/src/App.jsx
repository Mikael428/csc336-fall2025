import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // CRITICAL: Import all router components
import './App.css'; 

// CRITICAL: Use simple relative paths assuming all components are in the same 'src/' directory
import Home from './Home'; 
import Register from './Register';
import Schedule from './Schedule';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar (visible on all pages) */}
      <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/register">Register</Link>
      </nav>

      <div className="content-container">
        {/* Routes define which component to render based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;