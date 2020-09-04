import React, {
  Component
} from 'react';
// import { Switch, Route } from "react-router-dom";
import './App.scss';
// import './img/adelehaenelmodifs.png'

// Pages
import Home from "./components/page/Home.js";
// import About from "./components/page/About";
// import Contact from "./components/page/Contact";
// import Media from "./components/page/Media";

// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import SideDrawer from "./components/utils/sideDrawer";
import Backdrop from "./components/utils/backdrop";
import Navbar from "./components/utils/navbar";
import {
  render
} from '@testing-library/react';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });

  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = < SideDrawer / > ;
      backdrop = < Backdrop click = {
        this.backdropClickHandler
      }
      />
    }



    return (
      // < div className="App">
      <
      div >
      <
      Header / >
      <
      Navbar drawerClickHandler = {
        this.drawerToggleClickHandler
      }
      /> {
        sideDrawer
      } {
        backdrop
      } <
      main id = "content-main" >
      <
      p > this is my page content yo < /p> {
        /* <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                  </Switch> */
      } <
      Home / >

      <
      /main> <
      Footer / >
      <
      /div >
    );
  }
}

export default App;