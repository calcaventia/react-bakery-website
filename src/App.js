import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import MenuPage from "./components/MenuPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" component={AboutPage} />
        <Route path="/menu" component={MenuPage} />
      </Routes>
    </div>
  );
}

export default App;
