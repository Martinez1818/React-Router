import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Yellow from "./Yellow";
import Green from "./Green";
import Orange from "./Orange";
import Purple from "./Purple";
import Turquoise from "./Turquoise";
import Brown from "./Brown";

function MainContainer() {
  return (
    <div className="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/turquoise" element={<Turquoise />} />
        <Route path="/brown" element={<Brown />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
