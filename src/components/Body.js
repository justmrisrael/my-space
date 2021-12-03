import styled from "styled-components";
import React from 'react'
import Sections from './Sections'

function Body({BtnText}) {
  return (
    <Home className="container">
      <TextContainer>
        <a href="#">Hey there!<br />
        I'm Israel Musa.</a>
      </TextContainer>

      <StaticWords>
          <a>I'm a Front End Developer & UX Designer<br />
            who obsesses about creating aestheticly appealing web applications.<br />
            Let's bring your ideas to life!
          </a>
      </StaticWords>
          <ButtonGroup>
            <Bttn className="hvr-grow">
              {BtnText}
            </Bttn>
          </ButtonGroup>
        <h2>About Me</h2>
            <About>
              
            </About>
        <h2>Projects</h2>
            <Tools >
              <Sections/>
              <Sections/>
              <Sections/>
            </Tools>
          
    </Home>
  );
}
export default Body;


const Tools = styled.div`
  height: auto;
  width: 100%;
  align-items: left;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const About = styled.div`
  margin-top: 30px;
  height: 800px;
  width: 100%;
  a{
    font-family: "Gidole";
  }
`
const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
      flex-direction: column;
  }
`
const Bttn = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 200px;
    color: white;
    display: flex;
    box-shadow: -5px 5px 0 #999999;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    opacity: 1.85;
    text-transform: uppercase;
    font-size: 1em;
    font-family: "Gidole";
    font-weight: solid;
    cursor: pointer;
    margin-left: 20px;
    

`
const Home = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-bottom: 58px;
  margin-left: 4%;
  margin-top: 4em;

  @media (max-width: 768px) {
    margin-left: 2%;
    height: 2300px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: left;
  margin-left: 1em;
  a {
    font-family: "Kollektif";
    font-size: 4em;
    font-weight: normal;
    text-align: left;
    color: #F7C59F;
  }
  @media (max-width: 768px) {
    a {
      font-size: 3em;
      font-weight: normal;
    }
  }
`;
const StaticWords = styled.div`
  position: relative;
  display: flex;
  margin-left: 1em;
  a {
      font-family: "Gidole";
      font-size: 1.5em;
      color: white;
      text-align: left;
      line-height: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 0.9em;
  }

}
`

