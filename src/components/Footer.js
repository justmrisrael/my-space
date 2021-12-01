import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <a href="#">Back to top</a>
    </Foot>
  );
}
export default Footer;

const Foot = styled.footer`
  background-color: #E1E5EE;
  padding: 80px 0;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  width: 100%;
  a{
      font-family: "Gidole";
      font-weight: normal;
      color: black;
  }
`
