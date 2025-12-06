import About from '../../src/about.jsx';
import "./app.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ListContainer from "./src/ListContainer.jsx";
import DogImageFetcher from './src/DogImageFetcher.jsx';



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav>
          <NavLink to="/">List Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/api-data">Dog Images</NavLink>
        </nav>
        <main>
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/api-data" element={<DogImageFetcher />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}
 
export default App;

