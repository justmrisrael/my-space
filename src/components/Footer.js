import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div className="footer">
      <Foot>
        <Menu>
          <h5>Links</h5><br/>
          <a href="https://github.com/justmrisrael/" target="_blank">Github </a>
          <a href="https://www.linkedin.com/in/israel-musa-8b8758173/" target="_blank">LinkedIn </a>
          <a href="./resume/Israel_ Musa_resume.pdf">Resumé </a>
        </Menu>
        <Btt>
          <a href="#one">Back to top </a>
        </Btt>
      </Foot>
    </div>
  )
}

export default Footer

const Foot = styled.div`
  position: relative;
  display: flex;
`

const Menu = styled.div`
  float: left;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 200px;
  padding-right: 1em;
  text-transform: uppercase;
  line-height: 1.8;
  a{
    font-weight: bold;
    text-align: left;
    color: #7D827D;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    padding 0 15%;
  }
`

const Btt = styled.div`
  position: absolute;
  float: right;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-right: 10em;
  a{
    font-weight: bold;
    text-align: right;
    color: #7D827D;

  }
  @media (max-width: 768px) {
    padding-right: 15%;
  }
`