import styled from "styled-components";
import React from "react";
import Sections from "./Sections";

function Body({ BtnText }) {
  return (
    <Home>
      <Name className="main">
        <Ava>
          <h3>I'm Israel Musa</h3>
          <line />
          <h3> Available for hire.</h3>
        </Ava>
        <h1>I'm a Front-end Developer and UI/UX Designer</h1>
        <Intro>
          <h4>
            Enthusiastic and innovative developer with a focus on developing
            visually aesthetic front-end for web applications.
          </h4>
        </Intro>

        <ButtonGroup>
          <Bttn className="hvr-grow">{BtnText}</Bttn>
        </ButtonGroup>
      </Name>
      <h2>About Me</h2>
      <About className="main"></About>
      <h2>Projects</h2>
      <Tools>
        <Sections />
        <Sections />
        <Sections />
      </Tools>
    </Home>
  );
}
export default Body;
const Intro = styled.div`
  max-width: 750px;
`;
const Ava = styled.div`
  display: flex;
  max-width: 950px;
  
`;

const Name = styled.div``;

const Tools = styled.div`
  align-items: left;
  justify-content: space-between;
  display: flex;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const About = styled.div`
  a {
    font-family: "Gidole";
  }
`;
const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Bttn = styled.div`
  background-color: #282c34;
  height: 60px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-transform: uppercase;
  font-size: 1em;
  font-family: "Gidole";
  font-weight: solid;
  cursor: pointer;
`;
const Home = styled.div`
  position: relative;
  flex-direction: column;
  padding-bottom: 58px;
  margin-top: 20px;
`;
