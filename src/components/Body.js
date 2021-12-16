import styled from "styled-components"
import React from "react"
import Sections from "./Sections"
import Value from "./Value"

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
            An enthusiastic and innovative developer, with a focus on developing
            visually aesthetic front-end for web applications.
          </h4>
        </Intro>

        <ButtonGroup>
          <Bttn className="hvr-grow">{BtnText}</Bttn>
        </ButtonGroup>
      </Name>

      <Value />

    <About className="main">
    <h1>About Me</h1>
      <div className="block">
          <h4><h3>INTRODUCTION</h3>Hello! my name is Israel and I build products for the web. 
            At the age of 16, I was introduced to coding and learned to create mobile websites.
            I also found photography and filmmaking, which allow me to convey my artistic vision.
            <br/>Today, I use my aesthetic sense and web application design skills to develop aesthetically
              appealing, device-responsive, and fast-loading digital environments.
          </h4>
          
          </div>
        <div></div>
    </About>

      <Tools className="main">
      <h1>Projects</h1>
        <Sections />
        <Sections />
      </Tools>
    </Home>
  )
}
export default Body

const Intro = styled.div`
  max-width: 750px;
  @media (max-width: 768px) {
    h4{
      font-size: 15px;
    }
  }
`
const Ava = styled.div`
  display: flex;
  max-width: 950px;
  @media (max-width: 768px) {
    h1{
      font-size: 12vw;
    }
  }
`

const Name = styled.div`
  bottom: 0;
  padding: 0 4em 0;
  @media (max-width: 768px) {
    padding: 0 2em 0;
  }
`

const Tools = styled.div`
  align-items: left;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`

const About = styled.div`
  display: flex;
  flex-direction: row;
  li{
    align-items: left;
    list-style-type: circle;
  }
  h3{
    color: #7D827D;
    font-size: 30px;
    padding: 0 0 20px;
  }
  h4{
    padding: 0 3em 0;
  }
`
const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Bttn = styled.div`
  background-color: #2A2B2A;
  height: 60px;
  width: 300px;
  color: #7D827D;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #7D827D;
  text-transform: uppercase;
  font-size: 1em;
  font-family: "Fira";
  font-weight: solid;
  cursor: pointer;
`
const Home = styled.div`
  position: relative;
  flex-direction: column;
  padding-bottom: 58px;
  margin-top: 20px;
`
