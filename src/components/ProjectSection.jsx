import React, { useEffect } from 'react'
import CardsHolder from './CardsHolder'
import ProjectCard from './ProjectCard'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProjectSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos='fade-down' id='projects-section'>
            <h2 className='red'>Projects</h2>
            <CardsHolder>
                <ProjectCard
                    title='Personal port'
                    tool='React'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
                <ProjectCard
                    title='Student GPA Calculator'
                    tool='Flutter'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
                <ProjectCard
                    title='Personal port'
                    tool='React'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
            </CardsHolder>
            <CardsHolder>
                <ProjectCard
                    title='Personal port'
                    tool='React'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
                <ProjectCard
                    title='Personal port'
                    tool='React'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
                <ProjectCard
                    title='Personal port'
                    tool='React'
                    img='personal-potfolio.jpg'
                    url='https://github.com/ZAlreheily/personal-portfolio'
                />
            </CardsHolder>
        </div>
    )
}

export default ProjectSection