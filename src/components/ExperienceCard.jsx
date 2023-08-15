import React from 'react'
import GradientCard from './GradientCard'

const ExperienceCard = ({ name, description, company, duration }) => {
    return (
        <GradientCard classes='flex experience-card'>
            <h3 className='project-name'>{name}</h3>
            <p className='red'>{company}</p>
            <p className='red'> {duration} </p>
            <p>{description}</p>
        </GradientCard>
    )
}

export default ExperienceCard