import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto">
      <div className="container">
        {/* Logo */}
        <div className="mb-3">
        </div>

        {/* Copyright */}
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Garbage Classification App. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="mb-3">
          <NavLink to="/" className="text-light mx-2" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-light mx-2" style={{ textDecoration: "none" }}>
            About
          </NavLink>
          <NavLink to="/contact" className="text-light mx-2" style={{ textDecoration: "none" }}>
            Contact
          </NavLink>
        </div>

        {/* Social Media Links */}
        <div>
          <a href="https://github.com" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="text-light mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;