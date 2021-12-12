import React from 'react'
import styled from "styled-components";

const Sections = () => {
    return (
        <div className="container" >
            <Gamble>

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
    min-height: 500px;
    align-items: left;
    box-shadow: -10px 10px 10px #000;
`
