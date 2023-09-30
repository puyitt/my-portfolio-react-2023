import React from 'react'
import './index.scss'
import { faFacebook, faGithub, faGithubAlt, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <>
        <div className="container footer-page" id="footer">
            <div className="socilaArea">
                <a href="https://www.linkedin.com/in/thet-paing-soe-9631a8245?fbclid=IwAR31uuzOapbdqu22ofJHztFE7yYZYy57fkGqkZEqEAwQiPK5phGLgm3LyFY" target='blank'><FontAwesomeIcon icon={faLinkedin} color="#fff"/></a>
                <a href="https://github.com/puyitt" target='blank'><FontAwesomeIcon icon={faGithub} color="#fff"/></a>
                <a href="https://www.instagram.com/pu_yitt/?igshid=MzMyNGUyNmU2YQ%3D%3D&fbclid=IwAR06TycZRmqdkcztfkt5k0ZVYyCQ8FJhcZFU_TIKYfwGi6BACenu6v7Kbv0" target='blank'><FontAwesomeIcon icon={faInstagram} color="#fff"/></a>
                <a href='https://www.facebook.com/na.vi.547' target='blank'><FontAwesomeIcon icon={faFacebook} color="#fff"/></a>
            </div>
            <p className="copyRight">© 2023 Thet Paing Soe. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer