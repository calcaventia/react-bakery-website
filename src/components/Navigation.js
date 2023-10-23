import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li id="navbar-home">
          <Link to="/">Home</Link>
        </li>
        <li id="navbar-about">
          <Link to="/about">About Us</Link>
        </li>
        <li id="navbar-menu">
          <Link to="/menu">Menu</Link>
        </li>
        <li id="navbar-contact">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
