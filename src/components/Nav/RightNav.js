import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
  return (
    <Menu open={open}>
      <a href="#one">Home</a>
      <a href="#two">About</a>
      <a href="#three">Projects</a>
      <Link to="/contact">Contact</Link>
      <a href="./resume/Israel_ Musa_resume.pdf">Resumé</a>
    </Menu>
  );
};

export default RightNav;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    font-family: Fira;
    text-transform: uppercase;
    padding: 0 15px;
    font-size: 20px;
    color: #7d827d;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7d827d;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 16;
    height: 100vh;
    width: 350px;
    padding-top: 5rem;
    transition: transform 0.6s ease-in-out;

    a {
      color: #000;
      padding: 20px;
    }
  }
`;
