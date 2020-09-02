import React from 'react';
// import { Switch, Route } from "react-router-dom";
import './App.scss';
import './img/adelehaenelmodifs.png'


// Pages
// import Home from "./components/page/Home.js";
// import About from "./components/page/About";
// import Contact from "./components/page/Contact";
// import Media from "./components/page/Media";
// import NotFound from "./components/page/NotFound";

// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"


function App() {
  return (
    < div className="App">
      <Header />
      <main id="content-main">

        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </Switch> */}

      </main>
      <Footer />
    </div >
  );
}

export default App;

