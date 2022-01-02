import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Value from "./Value";
import Header from "./Header";
import Footer from "./Footer";


export default function Body({ BtnText }) {
  return (
    <Home className="container">
      <Header />
      <Name className="section" id="one">
        <a>
          <Ava>
            <h3>I'm Israel Musa -- Available for hire.</h3>
            <h1 >I'm a Front-end Developer and UI/UX Designer</h1>
          </Ava>

          <Intro>
            <h4>
              An enthusiastic and innovative developer, with a focus on
              developing visually aesthetic and responsive front-end for web applications.
            </h4>
          </Intro>
        </a>
        <ButtonGroup>
          <Link to="/contact">
            <Bttn className="button hvr-sweep-to-right">{BtnText}</Bttn>
          </Link>
        </ButtonGroup>

        <DownArrow src="./images/down-arrow.svg" />
      </Name>

      <About className="section" id="two">
        <a>
          <h1>About Me</h1>
          <h4>
            <h3>INTRODUCTION</h3>Hello! my name is Israel and I build products
            for the web. At the age of 16, I was introduced to coding and
            learned to create mobile websites. I also found photography and
            filmmaking, which allow me to convey my artistic vision.
            <br />
            <br />
            Today, I use my aesthetic sense and web application design skills to
            develop aesthetically appealing, device-responsive, and fast-loading
            digital environments.
          </h4>
        </a>
      </About>

      <Tools className="section" id="three">
      <h1 >Projects</h1>
        <a>
          <Card imageSrc="./images/portfolio.svg" text="My Portfolio"/>
          <Card imageSrc="./images/tesla.svg" text="Tesla Landing Page" />
        </a>
      </Tools>

      <Value />
      <Footer />
    </Home>
  );
}

const DownArrow = styled.img`
  height: 40px;
  padding: 30px 0 30px;
  left: 50%;
  overflow-x: hidden;
  animation: animateDown infinite 2s;
`;

const Name = styled.div`
  a {
    margin-top: 100px;
    padding: 1.5em;
  }
`;

const Ava = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  @media (max-width: 768px) {
    h3 {
      font-size: 15px;
    }
    h1 {
      font-size: 50px;
    }
  }
`;
const ButtonGroup = styled.div`
  box-sizing: border-box;
  padding-left: 30px;
  margin-top: -30px;
  align-items: left;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Bttn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Intro = styled.div`
  max-width: 1050px;
  @media (max-width: 768px) {
    h4 {
      font-size: 15px;
    }
  }
`;

const Tools = styled.div`
a{
  box-sizing: border-box;
  padding: 200px;
  padding: 1.5em;
  display: flex;
}
h1{
  padding-left: 0.3em;
}
@media (max-width: 768px) {
  a{
    display: flex;
    flex-direction: column;
  }
  h1{
    padding-left: 1em;
  }
}
`;

const About = styled.div`
  a {
    padding: 1.5em;
    margin: 5em 0;
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 15px;
    }
  }
`;

const Home = styled.div``;
