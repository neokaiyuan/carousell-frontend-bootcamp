import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar";

const App = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

export default App;
