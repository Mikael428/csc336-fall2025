import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import CityList from "./components/CityList";
import About from "./components/About";
import Quotes from "./components/Quotes";
import './App.css'; // Import the main CSS

function App() {
  // State from Part 1 is moved into the CityList component

  return (
    // 2. Set Up Routing
    <Router>
      <Header 
        title="React Basics Showcase" 
        subtitle="Components, State, Props, Routing, and API Integration" 
      /> 
      
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home (List)</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/quotes">Random Quotes</Link>
      </nav>
      
      <div className="main-content">
        <Routes>
          {/* A home route (/) that displays your list from Part 1 */}
          <Route path="/" element={<CityList />} />
          
          {/* An "About" or similar informational page */}
          <Route path="/about" element={<About />} />
          
          {/* A page that displays data fetched from an API */}
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;