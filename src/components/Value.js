import React from 'react'
import styled from "styled-components"

const Value = () => {
    return (
        <Values className="section" >
            <div><h4>Product Build Tools</h4>
                    <h1>Javascript | React | HTML | CSS/SCSS | PYTHON | Webpack | AWS | Node | MongoDB</h1> 
            <h4>Product Design Tools</h4>
                <h1>Figma | photoshop | Adobe XD</h1></div>
            
        </Values>
    )
}

export default Value

const Values = styled.div`
    display: flex;
    flex-direction: column;
    div{
        padding: 1.5em;
        text-align: left;
      }
    
`