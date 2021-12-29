import React from "react";
import styled from "styled-components";
import Burger from "./Nav/Burger";

const Header = () => {
  return (
    <NavBar>
        <a href="https://israelmusa.netlify.app"><div className="logo hvr-grow">IM_ </div></a>
      <Burger />
    </NavBar>
  )
}
export default Header;

const NavBar = styled.div`
  width: auto;
  display: flex;
  box-sizing: border-box;
  margin: 20px;
  justify-content: space-between;
  top: 0; 
  right: 0;
  z-index: 1;
`

