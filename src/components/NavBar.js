import React from "react";
import logo from "../logo.png"; // Adjust the path if necessary
import "./NavBar.css"; // Update the CSS file import
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left-content">
        {/* Any content you want on the left side */}
      </div>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Link to="/listings/new" className="sell-button">
        Sell
      </Link>
    </div>
  );
};

export default NavBar;
