import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GarbageClassification from "./pages/GarbageClassification";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classify" element={<GarbageClassification />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
