import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/Home/HomeScreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
