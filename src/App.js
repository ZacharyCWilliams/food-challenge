import React, { useEffect } from "react";
import './App.css';
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import MenuGrid from "./MenuGrid/MenuGrid";

// Nav
// Banner
// <Menu>
// H1
// P
// render <ItemGrid items={items} />
// <Item />
//
//</Menu>

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

/* 
      <Banner />
      <Menu />
      <Footer /> */
