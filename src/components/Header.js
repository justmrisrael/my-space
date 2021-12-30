import React from "react";
import styled from "styled-components";
import Burger from "./Nav/Burger";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <NavBar>
        <Link to="/"> <div className="logo hvr-grow">IM_ </div></Link>
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

