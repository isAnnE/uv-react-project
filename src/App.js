// import React, {
//   Component
// } from 'react';
import React from 'react';
import './App.scss';
import './components/styles/home.scss'
// import axios from 'axios';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import BrowserRouter as Router, { Link, NavLink, Switch, Route } from 'react-router-dom';
import haenel from "./components/img/haenel.png";
import lawrence from "./components/img/lawrenceanywaysbis.png";
import gilmore from "./components/img/ggirls.jpg";
import docuov from "./components/img/docuovidie.jpg";

// Auth
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

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
import SignIn from "./components/page/SignIn";
import SignUp from "./components/page/SignUp";
import Submit from "./components/page/Submit";
import Dashboard from "./components/page/Dashboard";




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




            <Route path="/contact" component={Contact} />
            <Route path="/mentions" component={Mentions} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <ProtectedRoute path="/submit" component={Submit} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/adminishere" component={Admin} />
            <ProtectedRoute path="/editadmin/:id" component={EditAdmin} />
            <Route path="*" component={NotFound} />
            {/* not found doit être la dernière route */}

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
      <img src={haenel} alt="Adèle Haenel" className="haenel" />

    </section>

    <section className="intro">
      <div className="introdiv">
        <h1>Pourquoi Ultraviolettes ?</h1>
        <p>Parce que si vous aussi vous aimeriez voir des films, séries et documentaires avec des personnages féminins qui passent le test de Bechdel, alors bienvenue !</p>
        <p>Si en revanche vous voulez connaître davantage de films, séries et documentaire faits par des femmes, bienvenue aussi !</p>
        <p>Vous vous en doutez, le projet de Ultraviolettes est de regrouper et faire connaître un maximum d'oeuvres cinématographiques qui répondent à au moins un de ces deux objectifs.</p>
        <p>Et si vous avez des suggestions de films à nous faire, n'hésitez-pas à vous <a href="/signin">inscrire</a> pour accéder au formulaire de suggestions.</p>
      </div>
    </section>

    <section className="apercus">
      <div className="apercusdiv">

        <a href="/films">
          <figure className="apercu">
            <img src={lawrence} alt="Lawrence Anyways" className="apercuimg" />
            <figcaption className="caption">Films</figcaption>
          </figure>
        </a>

        <a href="/series">
          <figure className="apercu">
            <img src={gilmore} alt="Gilmore Girls" className="apercuimg" />
            <figcaption className="caption">Séries</figcaption>
          </figure>
        </a>

        <a href="/documentaires">
          <figure className="apercu">
            <img src={docuov} alt="Tu enfanteras dans la douleur" className="apercuimg" />
            <figcaption className="caption">Documentaires</figcaption>
          </figure>
        </a>

      </div>
    </section>

  </>

)

export default App;

