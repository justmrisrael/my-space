import styled from "styled-components"
import React from "react"
import Sections from "./Sections"
import Value from "./Value"

export default function Body({ BtnText }) {
  return (
    <Home>
      <Name className="section">
        <Ava>
          <h3>I'm Israel Musa // Available for hire.</h3>
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
        <DownArrow src="./images/down-arrow.svg" />
      </Name>
      
    <About className="section">
        <h1>About Me -</h1>
        <div className="block">
            <h4><h3>INTRODUCTION</h3>Hello! my name is Israel and I build products for the web. 
              At the age of 16, I was introduced to coding and learned to create mobile websites.
              I also found photography and filmmaking, which allow me to convey my artistic vision.
              <br/>Today, I use my aesthetic sense and web application design skills to develop aesthetically
                appealing, device-responsive, and fast-loading digital environments.
            </h4>
        </div>
    </About>

    <Value />

      <Tools className="section">
        <h1>Projects -</h1>
          <Sections />
          <Sections />
      </Tools>
    </Home>
  )
}

const DownArrow = styled.img`
    height: 40px;
    padding: 30px 0 30px;
    left: 50%;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Name = styled.div`
  position: relative;
  padding-top: 7em;
  margin-left: 3em;
  @media (max-width: 768px) {
    padding-left: 0;
    margin-left: 1em;
  }
`

const Ava = styled.div`
  display: flex;
  @media (max-width: 768px) {
    h3{
      font-size: 15px;
    }
  }
`
const ButtonGroup = styled.div`
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

const Intro = styled.div`
  max-width: 750px;
  @media (max-width: 768px) {
    h4{
      font-size: 15px;
    }
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
`

const Home = styled.div`
  flex-direction: column;
  padding-bottom: 58px;
`
