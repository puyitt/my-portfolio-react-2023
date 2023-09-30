import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faMapLocation,faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-wrap">
            <ul className="info-map">
              <li><span className='icon'><FontAwesomeIcon icon={faMapLocation} color="#ffd700"/></span><span className='data'>No-100, Upper Mandalay Street,<br />Kandawlay Quarter,<br />Mingalar Taung Nyunt Township,<br />Yangon. <br /></span></li>
              <li><span className='icon'><FontAwesomeIcon icon={faPhone} color="#ffd700"/></span><span className='data'><a className="tel" href="tel:=959960927470">+959-960927470</a><br/></span></li>
              <li><span className='icon'><FontAwesomeIcon icon={faEnvelope} color="#ffd700"/></span><span className='data'>thetpaingsoe.bece@gmail.com</span></li>
            </ul>
           
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Contact
