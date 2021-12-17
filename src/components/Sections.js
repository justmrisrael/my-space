import React from 'react'
import styled from "styled-components";

const Sections = () => {
    return (
        <div>
            <Gamble>
                <div> </div>
                <div> </div>
            </Gamble>
        </div>
    )
}

export default Sections

const Gamble = styled.div`
    border: 2px solid #999999;
    border-top: 50px solid #999999;
    border-radius: 2px;
    margin: 20px 0 20px;
    width: 100%;
    height: auto;
    align-items: left;
    display: flex;
    flex-direction: row;
    div{
        background-color: #363434;
        width: 150%;
        height: 100%;
        margin: 10px 0 10px;
    }
`