import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Practice1105 from "../../課程練習/Practice1105";

function App() {
  return (
    <>
      <Practice1105 Name="Freddy" Age="25" Where="Taichung" />
      {/* <button onClick={}></button> */}
      {/* <h2 className="test">這是一個H2 Tag</h2> */}
    </>
  );
}

export default App;
