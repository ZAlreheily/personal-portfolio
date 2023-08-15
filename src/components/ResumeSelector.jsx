import React, { useState } from 'react'
import GradientCard from './GradientCard'

const ResumeSelector = ({ value, setValue }) => {
    return (
        <GradientCard classes='resume-selector flex'>
            <GradientCard
                classes={`resume-selector-item hover-effect ${value == 0 && 'selector-clicked'}`}
                onClick={() => setValue(0)}>
                Education
            </GradientCard>
            <GradientCard
                classes={`resume-selector-item hover-effect ${value == 1 && 'selector-clicked'}`}
                onClick={() => setValue(1)}>
                Experience
            </GradientCard>
        </GradientCard>
    )
}

export default ResumeSelector