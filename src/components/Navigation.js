import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li id="navbar-home">
          <Link to="/" className="navbar-menu">
            Home
          </Link>
        </li>
        <li id="navbar-about">
          <Link to="/about" className="navbar-menu">
            About Us
          </Link>
        </li>
        <li id="navbar-menu">
          <Link to="/menu" className="navbar-menu">
            Menu
          </Link>
        </li>
        <li id="navbar-contact">
          <Link to="/contact" className="navbar-menu">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
