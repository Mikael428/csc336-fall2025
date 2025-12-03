import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Schedule from "./Schedule.jsx";
import Register from "./Register.jsx";


function Home() {
  return <h1>Home Page</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/Schedule">Schedule</Link> |{" "}
        <Link to="/Register">Register</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}


createRoot(document.getElementById('root')).render(
  <App />
);