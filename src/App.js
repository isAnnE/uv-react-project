import React from 'react';
import './App.scss';
import './img/adelehaenelmodifs.png'
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/page/Home";
// import About from "./components/page/About";
// import Contact from "./components/page/Contact";



function App() {
  return (
    < div className="App">
      {/* <Header /> */}
      <main id="content-main">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/product/:id" component={Product} />
          <Route path="/create-product" component={FormProduct} />
          <Route path="*" component={NotFound} /> */}
        </Switch>
      </main>
      {/* <Footer /> */}
    </div >
  );
}


export default App;