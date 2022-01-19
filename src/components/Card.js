import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Gamble className="hvr-grow" background={props.background}>
      <div>
        <h1>{props.projectName}</h1>
        <p>
          <h5>{props.projectDesc}</h5>
          <h3>{props.tech}</h3>
        </p>
      </div>
      <a
        className="button hvr-sweep-to-right"
        style={{
          padding: "1.5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href={props.link}
      >
        Visit
      </a>
    </Gamble>
  );
};
// = props =>
// src={props.text}
// image={props.imageSrc} background: ${props =>`url(${props.background})`};
export default Card;

const Gamble = styled.div`
  background: ${(props) =>
    `url(${props.background})no-repeat top center opacity:0.5`};
  box-sizing: border-box; 
  padding: 60px 50px 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  margin-bottom: 100px;
  border: 1px solid #7d827d;
  @media (max-width: 768px) {
    padding: 10px 10px 10px;
  }
  h1 {
    font-family: ardent;
    padding-left: 0;
  }
  h5 {
    font-size: 20px;
    font-family: ardent;
  }
  h3{
      font-family: Fira;
      font-size: 12px;
      margin-bottom: 0;
      
      color: #fff;
      width: 100%;
  }
  }
`;
// border: 2px solid #999999;
// border-top: 50px solid #999999;
// border-radius: 2px;
// margin: 20px 0 20px;
// width: auto;
// height: auto;
// align-items: left;
//
//
// @media (max-width: 768px) {
//     flex-direction: column;
// }
