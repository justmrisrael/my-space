import React from 'react'
import styled from "styled-components";

const Grid = ({AppImage}) => {
    return (
        <div>
            <Gamble>
                <div></div>
                <div> </div>
            </Gamble>
        </div>
    )
}

export default Grid;

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
    div{
        background-color: #363434;
        width: 100%;
        height: 100%;
        margin: 9px;
    }
`