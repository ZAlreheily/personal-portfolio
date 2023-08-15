import React, { useEffect } from 'react'
import CardsHolder from './CardsHolder'
import ProjectCard from './ProjectCard'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProjectSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <div data-aos='fade-left' id='projects-section'>
            <h2 className='red'>Projects</h2>
            <CardsHolder>
                <ProjectCard
                    title='Ecommerce REST API'
                    tool='Node JS, Express JS and MongoDB'
                    img='ecommerce-api.jpg'
                    url='https://github.com/ZAlreheily/ecommerce-rest-api'
                />
                <ProjectCard
                    title='Student GPA Calculator'
                    tool='Flutter'
                    img='gpa-calculator.jpg'
                    url='https://github.com/ZAlreheily/Student_GPA_Calculator'
                />

                <ProjectCard
                    title='Weather App'
                    tool='React'
                    img='weather.jpg'
                    url='https://github.com/ZAlreheily/weather-react-app'
                />
                <ProjectCard
                    title='Games Store'
                    tool='HTML, CSS and Node JS'
                    img='game-store.jpg'
                    url='https://github.com/ZAlreheily/game-store'
                />

                <ProjectCard
                    title='Event Manager'
                    tool='HTML, CSS and Node JS'
                    img='event-manager.jpg'
                    url='https://github.com/ZAlreheily/aazif-backend'
                />
            </CardsHolder>
        </div>
    )
}

export default ProjectSection