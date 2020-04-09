import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navi from "./components/Navbar";
import ControlledCard from "./components/Card";
import CurrentWeather from "./components/Card/CurrentWeather";

function App() {
  return (
    <>
      <div>
        <Navi />
      </div>
      <div>
        <ControlledCard />
      </div>
    </>
  );
}

export default App;
