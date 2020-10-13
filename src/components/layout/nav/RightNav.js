import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from "../../auth/AuthContext";
import ButtonSignout from "../../utils/ButtonSignout";
import ButtonDashboard from "../../utils/ButtonDashboard";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
// import { Link, NavLink } from 'react-router-dom';
// import logologin from "./components/img/login_signin.svg";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 align-items: center;

  li {
    padding: 18px 30px;
  }

  .button {
    text-decoration: none;
    color: black
}

  a:hover {
  color: #93278f;
  font-size: bold
}

.dashboardbuttons {padding-right: 30px}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    // li {
    //   padding-left: 30px
    // }

    a{color: #ffffff;
    text-decoration: none}
    .button {
      
      color: white
  }
  }
`;

// const RightNav = ({ open }) => 

export default function RightNav({ open }) {

  const AuthContextValue = useContext(AuthContext);

  return (
    <Ul open={open}>
      <li><a className="button" href="/">Accueil</a></li>
      <li><a className="button" href="/about">A propos</a></li>
      <li><a className="button" href="/films">Films</a></li>
      <li><a className="button" href="/series">Séries</a></li>
      <li><a className="button" href="/documentaires">Documentaires</a></li>
      <div className="dashboardbuttons">
        {'\u00A0'}
        <ButtonDashboard />
        {AuthContextValue.isSignedIn && (
          <>
            {'\u00A0'} | <ButtonSignout />
          </>
        )}
      </div>


    </Ul>
  );
}

// export default RightNav}