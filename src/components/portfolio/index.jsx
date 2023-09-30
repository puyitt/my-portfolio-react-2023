import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import img1 from '../../assets/images/project_1.png';
import img2 from '../../assets/images/project_2.png';
import img3 from '../../assets/images/project_3.png';
import img4 from '../../assets/images/project_4.png';
import img5 from '../../assets/images/project_5.png';
import './index.scss'
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    let projectList = [
        {
            id: '1',
            img:img1,
            title:'Kuwasawa Design School/Sougou',
            description: "Learn design at Kuwasawa's daytime club | At the Kuwasawa Design Institute Comprehensive Design Department (daytime club), the first year is a thorough study of the basics while honing the sensibilities essential to design, and the second and third years are focused on majoring in design. Students will be divided into groups to increase their expertise and application skills in each field.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://www.kds.ac.jp/sougou/'
        },
        {
            id: '2',
            img:img2,
            title:'Kuwasawa Design School/Yakan',
            description: "At Kuwasawa Design Institute's Major Design Department (evening class), people from diverse backgrounds study fashion/product/space/fashion design. We will answer any concerns or questions you may have about enrolling, such as ``I have never studied design before'' or ``I want to study while working'', along with the voices of alumni and current students.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://www.kds.ac.jp/yakan/'
        },
        {
            id: '3',
            img:img3,
            title:'Apex Factory',
            description: "Apex Factory Co., Ltd.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://apexfactory.co.jp/'
        },
        {
            id: '4',
            img:img4,
            title:'Hirakata',
            description: "It's like a family that connects by heart just by liking Hirakata City. Hirakata City is a core city located in the northeastern part of Osaka Prefecture with a population of approximately 400,000 people. This is a promotion site for Hirakata City, which is known for its easy access as the Keihan Railway and JR lines run through the city.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://mamekoshokai.online/'
        },
        {
            id: '5',
            img:img5,
            title:'Mameko',
            description: "Insect University Purchasing Department. We sell goods with motifs of insects, creatures, and nature.",
            language:'Html, Css, JavaScript, Jquery',
            link:'https://mamekoshokai.online/'
        },
    ]
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <>
      <div className="container portfolio-page" id="portfolio">
        <h1>
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