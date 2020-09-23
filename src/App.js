// import React, {
//   Component
// } from 'react';
import React from 'react';
import './App.scss';
// import axios from 'axios';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import BrowserRouter as Router, { Link, NavLink, Switch, Route } from 'react-router-dom';
import haenel from "./components/img/adelehaenelmodifs.png";


// Pages
import About from "./components/page/About";
import Media from "./components/page/Media";
// import Films from "./components/page/Films";
// import Series from "./components/page/Series";
// import Documentaires from "./components/page/Documentaires";
import Contact from "./components/page/Contact";
import Mentions from "./components/page/Mentions";
import NotFound from "./components/page/NotFound";
import Admin from "./components/admin/Admin";
import EditAdmin from "./components/admin/EditAdmin";
import Login from "./components/page/Login";


// Layout
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/nav/Navbar";
// import { render } from '@testing-library/react';

// COMPONENTS

// import { Router } from 'react-router';

// const api = axios.create


function App() {
  return (
    <div className="App">

      <Navbar />
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route
              path='/films'
              render={(props) => (
                <Media {...props} mediaType="Film" />
              )}
            />
            <Route
              path='/series'
              render={(props) => (
                <Media {...props} mediaType="Serie" />
              )}
            />
            <Route
              path='/documentaires'
              render={(props) => (
                <Media {...props} mediaType="Documentaire" />
              )}
            />
            <Route path="/admin" component={Admin} />
            <Route path="/editadmin/:id" component={EditAdmin} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/mentions" component={Mentions} />
            <Route path="*" component={NotFound} />

          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}





const Home = () => (
  <>
    <section id="slide" >
      <figure>
        <img src={haenel} alt="Adèle Haenel" className="haenel" />
      </figure>


      <p id="catchphrase" > Lieu de partage de films féministes </p>
    </section>

    <section id="intro">
      <div id="intro">
        <h1>Pourquoi Ultraviolettes ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem voluptatibus corrupti,
        assumenda repellendus,
        numquam quasi officiis, officia laborum modi unde! Doloremque dolorem esse numquam quos earum quod vero
            molestias?</p>
      </div>
    </section>

    <section id="apercus">
      <div id="apercus">
        <figure class="apercu">Insert title</figure>
        <figure class="apercu">Insert title</figure>
        <figure class="apercu">Insert title</figure>
      </div>
    </section>

  </>

)

export default App;



//TUTO MAX

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SideDrawer from "./components/utils/sideDrawer";
// import Backdrop from "./components/utils/backdrop";
// import Navbar from "./components/utils/navbar";

// class App extends Component {

//   state = {
//     sideDrawerOpen: false
//   };

//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {
//         sideDrawerOpen: !prevState.sideDrawerOpen
//       };
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({
//       sideDrawerOpen: false
//     });

//   }

//   render() {
//     let sideDrawer;
//     let backdrop;

//     if (this.state.sideDrawerOpen) {
//       sideDrawer = < SideDrawer />;
//       backdrop = < Backdrop click={
//         this.backdropClickHandler
//       }
//       />
//     }



//     return (
//       <div>
//         <Header />
//         <Navbar drawerClickHandler={
//           this.drawerToggleClickHandler
//         }
//         />
//         {sideDrawer}
//         {backdrop}
//         {/* <Router>
//           <div className="router">
//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/about" component={About} />
//               <Route path="/shop" component={Media} />
//             </Switch>
//           </div>
//         </Router> */}

//         {/* <div className="router">
//           <NavLink exact to="/">
//             <Link to="/"> Home </Link>
//             <Link to="/about"> About </Link> 

//         </div> */}

//         < main id="content-main" >
//           <p > this is my page content yo </p>
//           <Home />
//         </main>
//         <Footer />
//       </div >
//     );
//   }
// }
// function App() {
//   return (
//     <div>
//       <Header />
//       <Navbar
// drawerClickHandler={
//   this.drawerToggleClickHandler
// }
// />
/* {sideDrawer}
      {backdrop} */
/* <Router>
        <div className="router">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
          </Switch>
        </div>
      </Router> */

/* <div className="router">
              <NavLink exact to="/">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>

            </div> */

//       < main id="content-main" >
//         <p > this is my page content yo </p>
//         <Home />
//       </main>
//       <Footer />
//     </div >
//   );
// }