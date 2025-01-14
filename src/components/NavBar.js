import React from "react";
import logo from "../logo.png"; // Adjust the path if necessary
import "./NavBar.css"; // Update the CSS file import
import { Link } from "react-router-dom";

function NavBar({ userName, onLogin }) {
  const getUserInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    return names.map((n) => n[0].toUpperCase()).join("");
  };

  return (
    <div className="nav-bar">
      <div className="left-content">
        {/* Any content you want on the left side */}
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-actions">
        <Link to="/listings/new" className="sell-button">
          Sell
        </Link>
        {userName ? (
          <div className="user-initials-circle">
            {getUserInitials(userName)}
          </div>
        ) : (
          <button className="login-button" onClick={onLogin}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
