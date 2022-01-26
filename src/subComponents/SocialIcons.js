import { LinkedIn } from '@material-ui/icons'
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import {DarkTheme,mediaQueries,larkTheme} from '../components/Themes'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
    ${mediaQueries(20)`
    margin: 0.3rem 0;


`};
}

${mediaQueries(40)`
left: 1rem;

    svg{
      width:20px;
      height:20px
    }

`};
`;

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`;
const Navzl = styled(NavLink)`
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
cursor:pointer;
`;



const SocialIcons = (props) => {
    const mq = window.matchMedia("(max-width: 40em)").matches;
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/Ryuk996"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
             <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            > 
                 <Navzl  color={props.theme}   target="_blank"   to={{pathname:"https://www.linkedin.com/in/thirunavukkarasu-kumaravel-a71b35147"}}>
                    <LinkedIn width={25} height={25}  fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </Navzl>
            </motion.div>
            {/*<motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            > */}
                {/* <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://facebook.com/codebucks27"}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://youtube.com"}}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div> */}

            <Line color={props.theme}

initial={
    {
        height:0
    }
}
animate={{
     height: mq ? "5rem" : "8rem" 
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}
            />
        </Icons>
    )
}

export default SocialIcons
