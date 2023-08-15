import React from 'react'
import GradientCard from './GradientCard'

const ProjectCard = ({ title, tool, url, img }) => {
    function redirect() {
        window.location.href = url;
    }
    return (
        <li className='card-li pointer' onClick={redirect}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <GradientCard classes='project-card hover-effect flex'>
                    <img className='project-image' src={img} alt="" />
                    <p className='red project-tool'>{tool}</p>
                    <h3 className='project-name'>{title}</h3>
                </GradientCard>
            </a>
        </li>
    )
}

export default ProjectCard