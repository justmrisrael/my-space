import React from 'react'
import styled from "styled-components";

const Sections = () => {
    return (
        <div className="container">
            <Gamble className="hvr-grow">

            </Gamble>
        </div>
    )
}

export default Sections

const Gamble = styled.div`
    border: 2px solid #999999;
    border-bottom: 25px solid #999999;
    border-radius: 3px;
    margin: 10px;
    min-width: 300px;
    min-height: 300px;
    align-items: left;
    box-shadow: -10px 10px 10px #000;
`
