import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../../../fake-site/my-react-app/src/Home";
import Register from "../../../../fake-site/my-react-app/src/Register";
import Schedule from "../../../../fake-site/my-react-app/src/Schedule";

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