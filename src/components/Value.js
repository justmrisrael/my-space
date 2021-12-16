import React from 'react'
import styled from "styled-components"

const Value = () => {
    return (
        <Values className="main">
            <div>
            <h4>Product Design Tools</h4>
                <div>
                    <h1>Javascript | React | HTML | CSS | PYTHON | Webpack | AWS </h1> 
                </div>
            </div>
            <div>
                <h4>Product Build Tools</h4>
                <h1>Figma | photoshop | SVG</h1>
            </div>
            
        </Values>
    )
}

export default Value

const Values = styled.div`
    border-bottom: 3px solid #565856;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    h4{
        align-text: right;
        font-size: 1.5em;
    }
`