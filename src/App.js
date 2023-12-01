import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Home2 from "./Component/Ahadi/Home2";
import SkizaTunes from "./Component/Ahadi/SkizaTunes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/Home2" element={<Home2 />} />
            <Route path="/SkizaTunes" element={<SkizaTunes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
