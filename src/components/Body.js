import styled from "styled-components"
import React from "react"
import Sections from "./Sections"

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
      <About className="main">
      <h2>About Me</h2>
      <Story>
        <p><h3>INTRODUCTION</h3>At the age of 16, I was introduced to coding and learned to create mobile websites.
           I also found photography and filmmaking, which allow me to convey my artistic vision.
            Today, I use my aesthetic sense and web application design skills to develop aesthetically
             appealing, device-responsive, and fast-loading digital environments.
        </p>
        
        <p><h3>RECENTLY</h3>I am working on my portfolio</p>
      </Story>
      </About>
      
      <Tools className="main">
      <h2>Projects</h2>
        <Sections />
        <Sections />
      </Tools>
    </Home>
  )
}
export default Body


const Story = styled.div`
  background-color: #999999;
  height: 100%;
  width: 100%;
  box-shadow: 10px 10px 10px #000;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  p{
    padding: 0 40px 0;
    font-size: 2.5vw;
    font-family: "Gidole";
    color: #000;
    text-align: left;
    line-height: 1.8;
  }
`
const Intro = styled.div`
  max-width: 750px;
`
const Ava = styled.div`
  display: flex;
  max-width: 950px;
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
  a {
    font-family: "Gidole";
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
`
const Home = styled.div`
  position: relative;
  flex-direction: column;
  padding-bottom: 58px;
  margin-top: 20px;
`
