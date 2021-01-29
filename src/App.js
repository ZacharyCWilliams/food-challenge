import React, { useEffect } from "react";
import './App.css';
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import MenuGrid from "./MenuGrid/MenuGrid";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <MenuGrid />
    </div>
  );
}

export default App;
