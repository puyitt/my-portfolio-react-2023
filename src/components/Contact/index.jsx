import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import contactme from '../../assets/images/digital-contract.svg'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('')
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0, // Change this value based on when you want the animation to start
  });

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
      <div className="container contact-page scroll-container" id="contact">
        <h1 ref={ref}>
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
              <li><span className='icon'><FontAwesomeIcon icon={faPhone} color="#ffd700"/></span><span className='data'><a className="tel" href="tel:+959960927470">+959-960927470</a><br/></span></li>
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
