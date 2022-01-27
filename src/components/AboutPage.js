import React from 'react'
import { motion } from 'framer-motion';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes';
import { lazy, Suspense } from 'react';
import "../components Css/aboutpage.css"


// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import Loading from '../subComponents/Loading';
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticleComponent = lazy(() =>
  import('../subComponents/ParticleComponent')
)
const BigTitle = lazy(() => import('../subComponents/BigTitlte'))

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled(motion.div)`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
  width: 60vw;
  height: 50vh;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);


`};
${mediaQueries(30)`
  width: 50vw;
  height: auto;
  backdrop-filter: none;
  margin-top:2rem;

`};

${mediaQueries(20)`
  padding: 1rem;
  font-size: calc(0.5rem + 1vw);
`};

`




const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >

          <LogoComponent theme='dark' />
          <SocialIcons theme='dark' />
          <PowerButton />
          <ParticleComponent theme='dark' />

          <Spaceman
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </Spaceman>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            <div className="Aboutcontainer">
        
              <h3 className="About_textH" >Hello there,</h3>
              <br></br>
              <h4 className="About_text"> I'm Thirunavukkarasu ,hails from trichy. I'm photographer by hobbyist, creative species and crave for new learnings.
              Activley looking for job as a web developer, as having hands-on on popular frameworks and react libraries,
              hence gaining adequate knowledges about the technologies to, pace up to develop  creative and interactive web application to 
              enhance the digital culture and make life simpler.  </h4>
              <br></br>
              <a
                  href="https://drive.google.com/file/d/1-lCGmjVmDnVdRrsSN1hKIYpVPf4Rhi5X/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="resume__downloadButton">Download Resume</button>
                </a>
            </div>
            {/* I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
            <br /> <br />
            
          
            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
            <br /> <br /> */}
            {/* <div>
              <a
              href="https://drive.google.com/file/d/13UBYcF2Epdej7W0bjZZ3bV1SXS6V6RW7/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="resume__downloadButton">Download Resume</button>
            </a>
          </div> */}
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>
      </Suspense>
    </ThemeProvider>

  )
}

export default AboutPage
