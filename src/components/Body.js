import styled from "styled-components";
import React from "react";
import Grid from "./Grid";
import Value from "./Value";
import Header from "./Header";
import Footer from "./Footer";


export default function Body({ BtnText }) {
  return (
    <Home className="container">
      <Header />
      <Name className="section">
        <a><Ava>
          <h3>I'm Israel Musa // Available for hire.</h3>
          <h1>I'm a Front-end Developer and UI/UX Designer</h1>
        </Ava>
        
        <Intro>
          <h4>
            An enthusiastic and innovative developer, with a focus on developing
            visually aesthetic front-end for web applications.
          </h4>
        </Intro>

        <ButtonGroup>
          <Bttn className="hvr-grow">{BtnText}</Bttn>
        </ButtonGroup></a>
        <DownArrow src="./images/down-arrow.svg" />
      </Name>

      <About className="section">
          <a><h1>About Me</h1>
          <div className="block">
              <h4><h3>INTRODUCTION</h3>Hello! my name is Israel and I build products for the web. 
                At the age of 16, I was introduced to coding and learned to create mobile websites.
                I also found photography and filmmaking, which allow me to convey my artistic vision.
                <br/><br/>Today, I use my aesthetic sense and web application design skills to develop aesthetically
                  appealing, device-responsive, and fast-loading digital environments.
              </h4>
          </div></a>
      </About>

      <Tools className="section">
        <a><h1>Projects</h1>
          <Grid AppImage="./images/portfolio.png"/>
          <Grid /></a>
      </Tools>

      <Value />
      <Footer />
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
  float: left;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  a{
    padding: 2em;
    text-align: left;
  }
`

const Ava = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  @media (max-width: 768px) {
    padding-top: 3em;
    h3{
      font-size: 15px;
    }
    h1{
      font-size: 50px;
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
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  a{
    padding: 2em;
  }
`

const About = styled.div`
  display: flex;
  height: auto;
  a{
    padding: 2em;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  div{
    @media (max-width: 768px) {
      h4{
        font-size: 15px;
      }
    }
  }
`

const Home = styled.div`
`
