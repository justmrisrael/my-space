import React from 'react'
import styled from "styled-components"

const Value = () => {
    return (
        <Values className="section">
            <a><h4>Product Build Tools</h4>
                    <h1>Javascript | React | HTML | CSS | PYTHON | Webpack | AWS | Node | MongoDB</h1> 
            <h4>Product Design Tools</h4>
                <h1>Figma | photoshop | Adobe XD</h1></a>
            
        </Values>
    )
}

export default Value

const Values = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a{
        padding: 2em;
        text-align: left;
    }
    @media (max-width: 768px) {
        padding: 0;
    }
    
`