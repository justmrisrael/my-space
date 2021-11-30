import React from 'react'
import styled from 'styled-components';

const RightNav = ({ open }) => {
    return (
    <Menu open = { open }>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
    </Menu>
    )
}

export default RightNav

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 1em;

  a {
      font-family: "Montserrat";
      padding: 18px 10px;
      font-size: 1em;
      color: #C7CCDB;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #767B91;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.6s ease-in-out;

    a {
      color: #000;
    }
  }
`;
