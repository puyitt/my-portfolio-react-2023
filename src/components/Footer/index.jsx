import React from 'react'
import './index.scss'
import { faFacebook, faGithub, faGithubAlt, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <>
        <div className="container footer-page" id="footer">
            <div className="socilaArea">
                <a href="#" target='blank'><FontAwesomeIcon icon={faLinkedin} color="#fff"/></a>
                <a href="#" target='blank'><FontAwesomeIcon icon={faGithub} color="#fff"/></a>
                <a href="#" target='blank'><FontAwesomeIcon icon={faInstagram} color="#fff"/></a>
                <a href="#" target='blank'><FontAwesomeIcon icon={faFacebook} color="#fff"/></a>
            </div>
            <p className="copyRight">© 2023 Thet Paing Soe. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer