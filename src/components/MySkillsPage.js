import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme, mediaQueries,mediaQueriesht } from './Themes';
import { Design, Develope } from './AllSvgs';
import LinearProgress from "@material-ui/core/LinearProgress";
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import "../components Css/myskill.css"
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

${mediaQueries(50)`
flex-direction:column;  
padding:8rem 0;
height:auto;
&>*:nth-child(5){
  margin-bottom:5rem;
}

`};
${mediaQueries(30)`

&>*:nth-child(5){
  margin-bottom:4rem;
}

`};
`;

const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 65vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
// ${mediaQueries(60)`
// height: 90vh !important;
// `};
// ${mediaQueriesht(20)`
//     height
// `}
${mediaQueries(50)`
  width: 50vw;
  height: max-content;

`};
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    // background-color: ${props => props.theme.text};
    background-color:rgb(75, 173, 177);
}
`;

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${mediaQueries(60)`
          font-size:calc(0.8em + 2vw);                                              //TODO
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`;

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
${mediaQueries(50)`
font-size: calc(0.8em + 1vw);

`};

${mediaQueries(30)`
          font-size:calc(0.7em + 1vw);

  

`};

${mediaQueries(25)`
          font-size:calc(0.5em + 1vw);

  

`};

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`;

const MySkillsPage = () => {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const animation = useAnimation();
    const animationImg = useAnimation();
    const [level, setLevel] = useState(false)

    useEffect(() => {                                                         // renders everytime when the div comes in viewport
        console.log("useEffect hpp inView", inView)
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            })
            // animationImg.start({
            //   y:0,
            //   transition:{
            //     type:'spring', duration: 2, bounce: 0.3
            //   }
            // })
            setLevel(true)
        }
        if (!inView) {
            animation.start({ x: '-100vw' })
            // animationImg.start({y:'-100vw'})
            setLevel(false)
        }
    }, [inView])
    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >

                {/* <LogoComponent theme='light' /> */}
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <div ref={ref} className="skillContainer" id="myskills"  >


                        <motion.div className="skillContainer__text" animate={animation} >
                            <Title>SKILLSET</Title>
                            <div className="skillContainer__skillSet">
                                <h5>React</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider1" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                            <div className="skillContainer__skillSet">
                                <h5>NodeJS</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider2" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                            <div className="skillContainer__skillSet">
                                <h5>AWS S3</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider3" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                            <div className="skillContainer__skillSet">
                                <h5>Sass and Tailwind</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider4" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                            <div className="skillContainer__skillSet">
                                <h5>Firebase</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider5" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                            <div className="skillContainer__skillSet">
                                <h5>MongoDB</h5>
                                <div className={level ? "skillContainer__slider skillContainer__slider6" : ""}>
                                    <LinearProgress variant="indeterminate" />
                                </div>
                            </div>
                        </motion.div>

                    </div>


                </Main>


                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
