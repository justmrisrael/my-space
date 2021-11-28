import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <Logo>
        <a href="#">IM.</a>
      </Logo>
      <Menu>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </Menu>
    </NavBar>
  );
}
export default Header;

const NavBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 1;
`;
const Logo = styled.div`
  position: relative;
  border: 2px solid #e1e5ee;
  background-color: #282c34;
  margin-top: 2em;
  margin-left: 2em;
  cursor: pointer;
  a {
    font-family: "Geo";
    color: #e1e5ee;
    font-size: 2em;
    font-weight: normal;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  flex: 1;
  margin-right: 1em;

  a {
    font-family: "Montserrat";
    font-weight: normal;
    color: #e1e5ee;
    text-transform: none;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
