import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Gamble className="card hvr-overline-from-center">
      <Img className="card-image" src={props.imageSrc} />
      <div className="card-text">
        <h4>{props.projectName}</h4>
      </div>
      <p className="card-desc">
        
        <h5>{props.projectDesc}</h5>
      </p>
      <div className="tech">
        <h3>{props.tech}</h3>
      </div>
    </Gamble>
  );
};
// = props =>
// src={props.text}
// image={props.imageSrc}
export default Card;

const Gamble = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h4 {
    padding: 0;
    margin: 5px 0 0;
    font-size: 30px;
    color: #999;
    font-family: ardent;
  }
  h5 {
    font-size: 20px;
    font-family: ardent;
  }
  h3{
      font-family: Fira;
      font-size: 12px;
      margin: 0;
      padding: 0;
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
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 10px;
`;
