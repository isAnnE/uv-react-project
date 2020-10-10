import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from './logoUVviolet.jpg';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: white;

  .logo {
    height: 90px;
    padding-top: 10px;
  }


`

const Navbar = () => {
  return (
    <Nav>
      <a href="/"><img src={Logo} alt="logo" className="logo" /></a>
      <Burger />
    </Nav>
  )
}

export default Navbar
