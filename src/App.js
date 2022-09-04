import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { originals, action, comedy, horror } from "./urls";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
    
    </div>
  );
}
export default App;