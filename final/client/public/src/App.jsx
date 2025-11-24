import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Schedule from "./Schedule";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="schedule" element={<Home />} />
            <Route path="register" element={<Home />} />
            </Routes>
            </BrowserRouter>
    );
}

export default App;