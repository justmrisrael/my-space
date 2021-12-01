import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div className="footer">
      <Menu>
        <h1>Links</h1><br/>
        <a href="https://github.com/justmrisrael/" target="_blank">Github </a>
        <a href="https://www.linkedin.com/in/israel-musa-8b8758173/" target="_blank">LinkedIn </a>
        <a href="./resume/Israel_ Musa_resume.pdf">Resumé </a>
      </Menu>
    </div>
  )
}

export default Footer

const Menu = styled.div`
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
    &:hover {
      text-decoration: underline;
    }
  }
`