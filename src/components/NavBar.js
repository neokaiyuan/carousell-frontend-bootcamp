import React from "react";
import logo from "../logo.png"; // Adjust the path if necessary
import "./NavBar.css"; // Update the CSS file import

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default NavBar;
