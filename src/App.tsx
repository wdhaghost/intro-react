import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="Main-Title"> Introduction à React </h1>
      {location.pathname === "/" ? <NavMenu></NavMenu> : null}
      {location.pathname !== "/" ? (
        <Link className="link" to={"/"}>
          Retour à la liste
        </Link>
      ) : null}

      <Outlet></Outlet>
    </div>
  );
}

export default App;
