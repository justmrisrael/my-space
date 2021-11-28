import React, { useState } from 'react'
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
        <Logo>
      <a href="#">IM</a>
      </Logo>

    </NavBar>
  )
}
export default Header

const NavBar = styled.div`
    position: absolute;
`
const Logo = styled.div`
    position: relative;
    border: 2px solid white;
    margin-top: 2em;
    margin-left: 2em;
    cursor: pointer;
    a{
        font-family: "Geo";
        color: #E1E5EE;
        font-size: 2em;
        font-weight: normal;
    }
`
