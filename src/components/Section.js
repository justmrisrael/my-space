import React from 'react'
import styled from "styled-components"

function Section({leftBtnText, rightBtnText}) {
    return (
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                <RightButton>
                    {rightBtnText}
                </RightButton>
                }
                
            </ButtonGroup>
        </Fade>
        </Buttons>
    )
}

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`