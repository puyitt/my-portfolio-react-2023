import React from 'react'
import { useRef,useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faBootstrap,
    faWordpress
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jquery from '../../assets/images/jquery.svg'
import tailwind from '../../assets/images/tailwind.svg'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [letterClass, setLetterClass] = useState('')
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0, // Change this value based on when you want the animation to start
    });

    let skillList = [
        {
            id: '1',
            icon : faHtml5,
            color:'#F06529',
            name: "Html",
            percent:'95%',
        },
        {
            id: '2',
            icon : faCss3,
            color:'#28A4D9',
            name: "Css",
            percent:'95%',
        },
        {
            id: '3',
            icon : faAngular,
            color:'#DD0031',
            name: "Angular",
            percent:'90%',
        },
        {
            id: '4',
            icon : faReact,
            color:'#5ED4F4',
            name: "React",
            percent:'75%',
        },
        {
            id: '5',
            icon : faJsSquare,
            color:'#EFD81D',
            name: "Javascript",
            percent:'85%',
        },
        {
            id: '6',
            icon : faGitAlt,
            color:'#EC4D28',
            name: "Git",
            percent:'80%',
        },
        {
            id: '7',
            icon : faBootstrap,
            color:'#7953b1',
            name: "Bootstrap",
            percent:'80%',
        },
        {
            id: '8',
            img: tailwind,
            color:'#38BDF8 ',
            name: "Tailwind",
            percent:'80%',
        },
        {
            id: '9',
            img : jquery,
            color:'#0769AD ',
            name: "jQuery",
            percent:'83%',
        },
        {
            id: '10',
            icon : faWordpress,
            color:'#00749C',
            name: "WordPress",
            percent:'55%',
        },
    ]

    useEffect(() => {
        if (inView) {
            setLetterClass('text-animate');

            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }
    }, [inView])

    return (
        <>  
            <div className="container about-page scroll-container" id="about">
                <h1 ref={ref}>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <div className="block">
                    <div className="skillSet">
                        <a href="https://html.com/" target="_blank" className='octagonWrap wrap1'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faHtml5} color="#F06529" />
                            </div>
                        </a>
                        <a href="https://angular.io/" target="_blank" className='octagonWrap wrap2'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faAngular} color="#DD0031" />
                            </div>
                        </a>
                        <div className='octagonWrap wrap3'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faReact} color="#5ED4F4" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap4'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faJsSquare} color="#EFD81D" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap5'>
                            <div className='octagon'>
                            <FontAwesomeIcon className="icon" icon={faWordpress} color="#00749C" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap6'>
                            <div className='octagon'>
                                <img src={jquery} className="icon img" alt="" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap7'>
                            <div className='octagon'>
                                <img src={tailwind} className="icon img" alt="" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap8'>
                            <div className='octagon'>
                            <FontAwesomeIcon className="icon" icon={faBootstrap} color="#7953b1" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap9'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faGitAlt} color="#EC4D28" />
                            </div>
                        </div>
                        <div className='octagonWrap wrap10'>
                            <div className='octagon'>
                                <FontAwesomeIcon className="icon" icon={faCss3} color="#28A4D9" />
                            </div>
                        </div>
                    </div>
                    <div className="text-zone">
                        <p>Experienced Frontend Developer with 4+ years of experience and a degree in Computer Engineering from University of Technology( Yatanarbon Cyber City ).</p>
                        <p> 
                            A self-motivated individual with knowledge and proficiency in Angular, HTML5, CSS,Bootstrap, JavaScript, React, Jquery and responsive web development, 
                            as well as the ability tocommunicate effectively in a team setting.
                        </p>
                        <p>
                            If I were to define myself in one sentence, it would be: I'm great at socializing and having fun, I'm a sports fanatic, and I'm tech-obsessed!
                        </p>
                    </div> 
                </div>
                <div className="skillGroup">
                {
                     skillList.map(skill => (
                        <Skill key={skill.id} skill={skill} />
                    ))
                }
                
                </div>  
            </div>
        </>
    )
}

const Skill = ({ skill }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the skill bar is in view
    });

    return (
        <div className={`skill ${skill.name}`} key={skill.id}>
            <div className="logo" style={{ borderColor: skill.color }}>
                {skill.icon && (
                    <FontAwesomeIcon className="icon" icon={skill.icon} color={skill.color} />
                )}
                {skill.img && (
                    <img src={skill.img} alt={skill.name} className='iconImg'/>
                )}
                <span className="name">{skill.name}</span>
            </div>
            <div className="skillBar" ref={ref}>
                <span className="percent">{skill.percent}</span>
                <div
                    className="range"
                    style={{
                        backgroundColor: skill.color,
                        width: inView ? skill.percent : '0%', // Animate width from 0 to the percent
                        transition: 'width 1s ease-in-out', // Smooth animation
                    }}
                ></div>
            </div>
        </div>
    );
};

export default About