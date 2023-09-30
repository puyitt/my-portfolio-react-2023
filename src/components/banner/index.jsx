import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Profile from './Profile'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray=['T','h','e','t',' ','P','a','i','n','g',' ','S','o','e'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },4000)
    },[])
    
    return (
        <div className="container home-page" id="home">
            <div className="block">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m, </span><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/></h1>
                    <h2>Frontend Developer</h2>
                    <AnchorLink className='flat-button' href='#contact'>CONTACT ME</AnchorLink>
                </div>
                <Profile></Profile>
            </div>
        </div>
    )
}

export default Home