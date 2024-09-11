import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <>
      <div className="container experience-page" id="careerlife">
        <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n','c','e']}
              idx={15}
          />
        </h1>
        <div className="expTree">
            <span className="point1"></span>
            <span className="point2"></span>
            <span className="point3"></span>
            <span className="point4"></span>
            <div className="jobCard job4">
                <p className="title">Officer - Senior Frontend Developer</p>
                <p className="date">Dec-2023 to Present</p>
                <p className="company">Yoma Bank (Myanmar)</p>
            </div>
            <ul className="detail detail4">
                <li>Developed Banking Web Portal with Angular, Html, css, javascript, bootstrap, materials UI and Sketch.</li>
                <li>API integrations with Angular</li>
                <li>Worked in banking Sector</li>
            </ul>

            <div className="jobCard job1">
                <p className="title">Senior Frontend Developer</p>
                <p className="date">Oct-2020 to Nov-2023</p>
                <p className="company">EBP Connetis Co.,Ltd</p>
            </div>
            <ul className="detail detail1">
                <li>Implemented responsive designs with Html, css, javascript, Jquery and adobe Xd.</li>
                <li>Checked and developed web UI while adhering to SEO and code standards.</li>
                <li>Deployed websites using FileZilla and uploading projects to Git repositories.</li>
            </ul>

            <div className="jobCard job2">
                <p className="title">Frontend Developer</p>
                <p className="date">Sep-2019 to Aug-2020</p>
                <p className="company">Ninety Five Group PTE Company Ltd</p>
            </div>
            <ul className="detail detail2">
                <li>Developed clients' projects using React.js, Wordpress, Mobirise, Html, Css and JavaScript</li>
                <li>Created mini game for Group selfie interactive campaign during 11.11 NationalSharing Day McDonald</li>
                <li>Created and deployed mini game project for ArtScience Museum Singapore</li>
            </ul>

            <div className="jobCard job3">
                <p className="title">Frontend Developer (Wordpress)</p>
                <p className="date">Feb-2019 to Aug-2019</p>
                <p className="company">CUE Co., Ltd.</p>
            </div>
            <ul className="detail detail3">
                <li>Developed and maintained websites with Wordpress</li>
            </ul>
        </div>
        <div className="expMobile">
            <div className="jobCard job4">
                <p className="title">Officer - Senior Frontend Developer</p>
                <p className="date">Dec-2023 to Present</p>
                <p className="company">Yoma Bank (Myanmar)</p>
            </div>
            <ul className="detail detail4">
                <li>Developed Banking Web Portal with Angular, Html, css, javascript, bootstrap, materials UI and Sketch.</li>
                <li>API integrations with Angular</li>
                <li>Worked in banking Sector</li>
            </ul>

            <div className="jobCard job1">
                <p className="title">Senior Frontend Developer</p>
                <p className="date">Oct-2020 to Nov-2023</p>
                <p className="company">EBP Connetis Co.,Ltd</p>
            </div>
            <ul className="detail detail1">
                <li>Implemented responsive designs with Html, css, javascript, Jquery and adobe Xd.</li>
                <li>Checked and developed web UI while adhering to SEO and code standards.</li>
                <li>Deployed websites using FileZilla and uploading projects to Git repositories.</li>
            </ul>

            <div className="jobCard job2">
                <p className="title">Frontend Developer</p>
                <p className="date">Sep-2019 to Aug-2020</p>
                <p className="company">Ninety Five Group PTE Company Ltd</p>
            </div>
            <ul className="detail detail2">
                <li>Developed clients' projects using React.js, Wordpress, Mobirise, Html, Css and JavaScript</li>
                <li>Created mini game for Group selfie interactive campaign during 11.11 NationalSharing Day McDonald</li>
                <li>Created and deployed mini game project for ArtScience Museum Singapore</li>
            </ul>

            <div className="jobCard job3">
                <p className="title">Frontend Developer (Wordpress)</p>
                <p className="date">Feb-2019 to Aug-2019</p>
                <p className="company">CUE Co., Ltd.</p>
            </div>
            <ul className="detail detail3">
                <li>Developed and maintained websites with Wordpress</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Experience
