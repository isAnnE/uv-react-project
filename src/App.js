import React from 'react';
import './App.scss';
import './img/adelehaenelmodifs.png'
// import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/page/Home.js";
// import About from "./components/page/About";
// import Contact from "./components/page/Contact";



function App() {
  return (
    < div className="App">
      <main id="content-main">
        <Home />
      </main>
    </div >
  );
}


export default App;