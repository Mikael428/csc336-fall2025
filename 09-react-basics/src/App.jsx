import { useState } from 'react'
import ListItem from './ListItem';
import Button from "./Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListContainer from './ListContainer';
import DogImageFetcher from './DogImageFetcher';


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

