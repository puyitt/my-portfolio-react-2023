import './App.scss';
import Banner from './components/banner';
import About from './components/About';
import Contact from './components/Contact';
import React, {useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faBriefcaseClock, faHome, faList, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Portfolio from './components/portfolio';
import Experience from './components/experience';
import Footer from './components/Footer';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const handleMode = event => {
    // 👇️ toggle isActive state on click
    setIsLight(current => !current);
      document.body.classList.toggle('light');
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className='App'>
      <button className={isLight ? 'mode light' : 'mode'} onClick={handleMode}><FontAwesomeIcon icon={faSun} color="#ffd700"/><FontAwesomeIcon icon={faMoon} /></button>
      <span className='tags top-tags'>&lt;html&gt;
      <br />
      <span className="top-tag-body">&lt;body&gt;</span></span>
      <div className={isActive ? 'floatMenu active' : 'floatMenu'} onClick={handleClick}>+
        <AnchorLink className='desktop' href='#home'>
          <FontAwesomeIcon icon={faHome} color="#022c43"/>
        </AnchorLink>
        <AnchorLink className='desktop' href='#about'>
          <FontAwesomeIcon icon={faUser} color="#022c43"/>
          </AnchorLink>
        <AnchorLink className='desktop' href='#portfolio'>
          <FontAwesomeIcon icon={faList} color="#022c43"/>
        </AnchorLink>
        <AnchorLink className='desktop' href='#careerlife'>
          <FontAwesomeIcon icon={faBriefcaseClock} color="#022c43"/>
        </AnchorLink>
        <AnchorLink className='desktop' href='#contact'>
          <FontAwesomeIcon icon={faAddressBook} color="#022c43"/>
        </AnchorLink>
      </div>
      <Banner />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
}

export default App;
