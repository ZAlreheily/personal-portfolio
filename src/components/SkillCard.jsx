import React from 'react'
import GradientCard from './GradientCard'

const SkillCard = ({title,description,icon}) => {
    return (
        <li className='skill-li'>
            <GradientCard classes='skill-card hover-effect flex'>
            <svg class ='skill-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d={icon}/></svg>
                <h3 className='light-gray'>{title}</h3>
                <p className='card-text'>{description}</p>
            </GradientCard>
        </li>
    )
}

export default SkillCard