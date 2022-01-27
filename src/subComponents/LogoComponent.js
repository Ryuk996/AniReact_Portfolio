import React from 'react'
import styled from 'styled-components'
import { DarkTheme,mediaQueries } from '../components/Themes'
import "../components Css/logoz.css"



const Logo = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Explora&display=swap');
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Explora', cursive;


position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
${mediaQueries(40)`
font-size:1.5em;
left:1rem;
top:2rem;
`}
`;

const LogoComponent = (props) => {
    return (
        <Logo className="logoz" color={props.theme}>
          TK
        </Logo>
    )
}

export default LogoComponent
