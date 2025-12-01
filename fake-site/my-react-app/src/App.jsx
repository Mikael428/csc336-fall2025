import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DogImageFetcher from "./DogImageFetcher.jsx";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Welcome to Dog Pics</h1>
      <p>Click “Random Dog” in the nav to see a random dog photo.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dogs">Random Dog</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogImageFetcher />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
