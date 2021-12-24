import React from "react";
import styled from "styled-components";

const Card = props => {
    return (
            <Gamble >
                <Img src={props.imageSrc} />
                <Text> <h3>{props.text}</h3></Text>
            </Gamble>
    )
};
// = props =>
// src={props.text}
// image={props.imageSrc}
export default Card;

const Gamble = styled.div`
    border: 2px solid #999999;
    border-top: 50px solid #999999;
    border-radius: 2px;
    margin: 20px 0 20px;
    width: 70vw;
    height: auto;
    align-items: left;
    display: flex;
    flex-direction: row;
`

const Img = styled.img`
    width: 50%;
    height: 50%;
    margin: 9px;
`

const Text = styled.div`
    width: 100%;
    height: 100%;
    margin: 9px;
    border-left: 0.5px solid white;
    padding-left: 2em;
    h3{
        color: white;
        font-weight: bold;
    }
`