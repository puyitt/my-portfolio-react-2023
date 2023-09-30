import React from 'react'
import { useEffect, useState } from 'react'
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

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page" id="about">
                <h1>
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
                        <p>Experienced Frontend Developer with 4+ years of experience and a degree in ComputerEngineering from University of Technology( Yatanarbon Cyber City ).</p>
                        <p> 
                            A self-motivated individual with knowledge and proficiency in Angular, HTML5, CSS,Bootstrap, JavaScript, React, Jquery and responsive web development, 
                            as well as the ability tocommunicate effectively in a team setting, seeks the position of Frontend Developer.</p>
                        <p>
                            I'm a very ambitious front-end developer looking for a role in an
                            IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p align="LEFT">
                            I'm quiet confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p>
                            If I were to define myself in one sentence, it would be: I'm great at socializing and having fun, I'm a sports fanatic, and I'm tech-obsessed!
                        </p>
                    </div> 
                    </div>               
            </div>
        </>
    )
}

export default About