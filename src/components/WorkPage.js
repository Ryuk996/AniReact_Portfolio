import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes';
import { motion } from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
background-color: ${props => props.theme.body};

height:400vh;
position: relative;
display: flex;
align-items: center;


`;

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
${mediaQueries(50)`
        
        
        left:calc(8rem + 15vw);

  `};

  ${mediaQueries(40)`
  top: 30%;
        
        left:calc(6rem + 15vw);

  `};

  ${mediaQueries(40)`
        
        left:calc(2rem + 15vw);

  `};
  ${mediaQueries(25)`
        
        left:calc(1rem + 15vw);

  `};
color:white;
`;

const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
${mediaQueries(40)`
     width:60px;
         height:60px;   
       svg{
         width:60px;
         height:60px;
       }

  `};
  ${mediaQueries(25)`
        width:50px;
         height:50px;
        svg{
         width:50px;
         height:50px;
       }

  `};
`;


// Framer-motion Configuration
const container = {

  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);



  useEffect(() => {
    let element = ref.current;


    const rotate = () => {

      element.style.transform = `translateX(${-window.pageYOffset}px)`


      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate);

    }
  }, [])


  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >

        <LogoComponent theme='dark' />
        {/* <SocialIcons theme='dark' /> */}
        <PowerButton />

        <Main ref={ref} variants={container} initial='hidden' animate='show'  >
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top='10%' right="20%" />
      </Box>

    </ThemeProvider>

  )
}

export default WorkPage
