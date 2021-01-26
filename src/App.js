import React, { useEffect } from "react";
import './App.css';
import axios from 'axios';
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";

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

  // const getMenuItems = async() => {
  //   const config = {
  //     headers: {'Access-Control-Allow-Origin': '*'}
  //   };
  //   const items = await axios.get("https://light.territory.workers.dev/api/v1/meals", config);
  //   console.log(items)
  // }

  // useEffect(() => {
  //   // getMenuItems();
  // }, [])



  return (
    <div className="App">
      <Nav />
      <Banner />
    </div>
  );
}

export default App;

/* 
      <Banner />
      <Menu />
      <Footer /> */
