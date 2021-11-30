import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Nav/Burger"

const Header = () => {
  return (
    <NavBar>
        <div className="logo">IM.</div>
      <Burger />
    </NavBar>
  )
}
export default Header;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0;
  justify-content: space-between;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 1;

  .logo {
    position: relative; 
    border: 2px solid #e1e5ee;
    background-color: #282c34;
    font-family: "Geo";
    color: #e1e5ee;
    font-size: 2em;
    left: 20px;
    margin-top: 30px;
    margin-bottom: 1em;
  }
`;

