import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from "../../auth/AuthContext";
import ButtonSignOut from "../nav/ButtonSignOut"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
// import { Link, NavLink } from 'react-router-dom';
// import logologin from "./components/img/login_signin.svg";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 

  li {
    padding: 18px 30px;
  }


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

    a{color: #fff;
    text-decoration: none}
  }
`;

// const RightNav = ({ open }) => 

export default function RightNav({ open }) {

  const AuthContextValue = useContext(AuthContext);

  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/films">Films</a></li>
      <li><a href="/series">Series</a></li>
      <li><a href="/documentaires">Documentaires</a></li>
      <li><a href="/signin">Sign In</a></li>
      <li> {AuthContextValue.isSignedIn && (
        <ButtonSignOut />
      )}</li>
    </Ul>
  );
}

// export default RightNav}