import React from "react";
import styled from "styled-components";
import Burger from "./Nav/Burger"

const Header = () => {
  return (
    <NavBar>
        <div className="logo">IM_ </div>
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
  right: 0;
  z-index: 1;
`;

