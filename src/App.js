import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Home from "./components/Home";
import Navs from "./components/Navs";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
