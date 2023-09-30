import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faMapLocation,faPhone } from '@fortawesome/free-solid-svg-icons';
import contactme from '../../assets/images/digital-contract.svg'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container contact-page" id="contact">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <div className="block">
          <div className="text-zone">
            <p>
              I am interested in freelance opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <ul className="info-map">
              <li><span className='icon'><FontAwesomeIcon icon={faMapLocation} color="#ffd700"/></span><span className='data'>No-100, Upper Mandalay Street, Kandawlay Quarter,<br />Mingalar Taung Nyunt Township, Yangon. <br /></span></li>
              <li><span className='icon'><FontAwesomeIcon icon={faPhone} color="#ffd700"/></span><span className='data'><a className="tel" href="tel:=959960927470">+959-960927470</a><br/></span></li>
              <li><span className='icon'><FontAwesomeIcon icon={faEnvelope} color="#ffd700"/></span><span className='data'><a href="mailTo:thetpaingsoe.bece@gmail.com">thetpaingsoe.bece@gmail.com</a></span></li>
            </ul>
          </div>
          <div className="info-wrap">
            <figure className="contactFig">
              <img src={contactme} alt="" />
            </figure>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Contact
