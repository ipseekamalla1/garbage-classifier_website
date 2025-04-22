import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import external CSS


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/nobg-logo.png" alt="Milton Waste Management Logo" />
          Domestic Waste Classification
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classify">Garbage Classification</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
