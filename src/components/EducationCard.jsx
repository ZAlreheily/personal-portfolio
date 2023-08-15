import React from 'react'
import GradientCard from './GradientCard'
const EducationCard = () => {
    return (
        <GradientCard classes='flex education-card'>
            <h3 className='project-name'>Bachelor's in Software Engineering</h3>
            <p>King Fahd University of Petroleum and Minerals (<span className='red'>KFUPM</span>)</p>
            <p className='red'> 2019 - Expected: 2024 </p>
            <p>Second Honor</p>
            <p className='red'>Awards:</p>
            <ul className='education-ul'>
                <li>Third Honor Student For Term 201</li>
                <li>Third Honor Student For Term 211</li>
                <li>Third Honor Student For Term 212</li>
                <li>Third Honor Student For Term 221</li>
                <li>Second Honor Student For Term 222</li>
            </ul>
        </GradientCard>
    )
}

export default EducationCard