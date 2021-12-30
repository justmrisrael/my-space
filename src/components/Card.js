import React from "react";
import styled from "styled-components";

const Card = props => {
    return (
            <Gamble className="card hvr-grow">
                <Img className="card-image" src={props.imageSrc} />
                <div className="card-text"> <h4>{props.text}</h4></div>
                <div className="links"></div>
            </Gamble>
    )
};
// = props =>
// src={props.text}
// image={props.imageSrc}
export default Card;

const Gamble = styled.div`
    display: flex;
    flex-direction: column;
`
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
`