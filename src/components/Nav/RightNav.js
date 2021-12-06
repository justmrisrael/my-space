import React from 'react'
import styled from 'styled-components';

const RightNav = ({ open }) => {
    return (
    <Menu open = { open }>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="./resume/Israel_ Musa_resume.pdf">Resumé</a>
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
      font-family: "Gidole";
      padding: 18px 10px;
      font-size: 1.5em;
      color: #C7CCDB;
      &:hover {
        text-decoration: underline;
      }
  }
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #767B91;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index: 16;
    height: 100vh;
    width: 350px;
    padding-top: 5rem;
    transition: transform 0.6s ease-in-out;

    a {
      color: #000;
    }
  }
`;
