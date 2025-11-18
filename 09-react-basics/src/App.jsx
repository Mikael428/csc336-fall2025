import { useState } from 'react'
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListContainer from './ListContainer.jsx';
import DogImageFetcher from './DogImageFetcher.jsx';


function App() {
  return (
    <Router>
      <header>
        <h1>React Basics App</h1>
        <nav>
          <Link to="/">List Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api-data">Dog Images</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/api-data" element={<DogImageFetcher />} />
        </Routes>
      </main>
    </Router>
  );
}
 
export default App;

