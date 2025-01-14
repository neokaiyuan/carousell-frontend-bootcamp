import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import NavBar from "./NavBar";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <NavBar userName={isAuthenticated ? user.name : null} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
