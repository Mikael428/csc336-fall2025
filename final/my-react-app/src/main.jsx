import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Schedule from "./schedule.jsx";
import Register from "./Register.jsx";
import viteImage from "./assets/Conference_Image.jpeg";

function Home() {
  return (
    <main>
    
      <section className="mx-auto mb-4 h-auto w-full max-w-lg rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Home Page
        </h1>
        <div className="w-full bg-gray-200">
          <p class="p-4">
          Welcome! Our Company is brand new, but ready to make your experience! Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte discovered uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law spring six. Pursuit showing tedious unknown winding see had man add.</p>
        </div>
      <div className="block transition-transform duration-300 hover">
        <img
        src={viteImage}
        alt="Our Company"
        className="max-full"
        />
      </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-slate-100 font-semibold mb-1">Clear overview</h2>
            Though all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting. How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
          </div>

          <div>
            <h2 className="text-slate-100 font-semibold mb-1">Modern feel</h2>
            Though all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting.How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
          </div>
        </div>
      </section>
    </main>
  );
}



function App() {
  return (
    <BrowserRouter>
        <header className="fixed top-0 left-0 w-full **!bg-indigo-700** shadow-xl z-50">
          <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 py-4">
        
        <div className="flex space-x-6 text-lg font-medium">
          <Link to="/"
          className="text-gray-300 hover:text-indigo-400 transition duration-150">Home</Link> |{" "}
          <Link to="/Schedule"
          className="text-gray-300 hover:text-indigo-400 transition duration-150">Schedule</Link> |{" "}
          <Link to="/Register"
          className="text-gray-300 hover:text-indigo-400 transition duration-150">Register
            </Link>
          </div>
        </nav>
      </header>

        <main className="pt-20 Navig">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}



createRoot(document.getElementById('root')).render(
  <App />
);