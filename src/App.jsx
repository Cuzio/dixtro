import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
