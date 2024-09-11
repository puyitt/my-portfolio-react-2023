import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/images/project_1.png';
import img2 from '../../assets/images/project_2.png';
import img3 from '../../assets/images/project_3.png';
import img4 from '../../assets/images/project_4.png';
import img5 from '../../assets/images/project_5.png';
import img6 from '../../assets/images/project_6.png';
import img7 from '../../assets/images/artscience.png';
import img8 from '../../assets/images/wefie.png';
import './index.scss'
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('');
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0, // Change this value based on when you want the animation to start
    });

    let projectList = [
        {
            id: '1',
            img:img1,
            title:'Kuwasawa Design School/Sougou',
            description: "Profile website for Kuwasawa Design School/Sougou.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://www.kds.ac.jp/sougou/'
        },
        {
            id: '2',
            img:img2,
            title:'Kuwasawa Design School/Yakan',
            description: "Profile website for Kuwasawa Design School/Yakan.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://www.kds.ac.jp/yakan/'
        },
        {
            id: '3',
            img:img3,
            title:'Apex Factory',
            description: "Profile webiste for Apex Factory Co., Ltd.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://apexfactory.co.jp/'
        },
        {
            id: '4',
            img:img4,
            title:'Hirakata',
            description: "Profile Website for Hirakata City.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://mamekoshokai.online/'
        },
        {
            id: '5',
            img:img5,
            title:'Mameko',
            description: "Profile website for Mameko.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://mamekoshokai.online/'
        },
        {
            id: '6',
            img:img6,
            title:'LinkALink',
            description: "Profile website for LinkALink.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://linkalink.jp/'
        },
        {
            id: '7',
            img:img7,
            title:'An art science lead campaign',
            description: "An art science lead campaign that capture message in a capsule.(1080 x 1920)",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://artscience.wunderfauks.com/'
        },
        {
            id: '8',
            img:img8,
            title:'Wefie (McDonald)',
            description: "Group selfie interactive campaign during 11.11 National Sharing Day McDonald.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://wefie.wunderfauks.com/'
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
      <div className="container portfolio-page scroll-container" id="portfolio">
        <h1 ref={ref}>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i','o']}
              idx={15}
          />
        </h1>
        <ul className="projectList">
            {
                projectList.map(project=>
                    <li key={project.id}>
                        <figure className="Img">
                            <img src={project.img} alt="" />
                        </figure>
                        <div className="label">
                            <p className="title">{project.title}</p>
                            <p className="description">{project.description}</p>
                            <p className="tech">Language : <span>{project.language}</span></p>
                            <a className="visit" href={project.link} target='blank'>Visit</a>
                        </div>
                    </li>)
            }
        </ul>              
      </div>
    </>
  )
}

export default Portfolio