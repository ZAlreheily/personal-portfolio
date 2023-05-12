import React from 'react'
import GradientCard from './GradientCard'

const ProjectCard = ({ title, tool, url, img }) => {
    function redirect(){
        window.location.href = url;
      }
    return (
        <li className='card-li pointer' onClick={redirect}>
            <GradientCard classes='project-card hover-effect flex'>
                <img className='project-image' src={img} alt="" />
                <p className='red'>{tool}</p>
                <h3 className='project-name'>{title}</h3>
            </GradientCard>
        </li>
    )
}

export default ProjectCard