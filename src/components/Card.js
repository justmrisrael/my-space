import React from 'react';
import styled from "styled-components";
import port from "./portfolio.png";

const Card = props => {
    return (
        <div>
            <Gamble>
                <Img image={props.imageSrc}/>
                <Text src={props.text}/>
            </Gamble>
        </div>
    )
}

export default Card;

const Gamble = styled.div`
    border: 2px solid #999999;
    border-top: 50px solid #999999;
    border-radius: 2px;
    margin: 20px 0 20px;
    width: 800px;
    height: 150px;
    align-items: left;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 270px;
        height: 150px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 9px;
`

const Text = styled.div`
    width: 100%;
    height: 100%;
    margin: 9px;
`