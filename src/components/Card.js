import React from 'react';
import styled from "styled-components";

const Card = props => {
    return (
        <div>
            <Gamble>
                <Img src={props.imageSrc}/>
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
    height: 350px;
    align-items: left;
    display: flex;
    flex-direction: row;
`
const Img = styled.div`
    width: 100%;
    height: 100%;
    margin: 9px;
`
const Text = styled.div`
    width: 100%;
    height: 100%;
    margin: 9px;
`