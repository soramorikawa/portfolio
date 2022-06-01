import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Left from "./components/left/Left";
import Right from "./components/right/Right";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Left />}></Route>
        <Route path="/personal" element={<Right />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
