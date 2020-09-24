import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from './logoUVviolet.png';

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
    width: 120px;
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
