import React from 'react'

const GradientCard = ({ children, classes = '' }) => {
    return (
        <div className={`gradient-card ${classes}`}>
            {children}
        </div>
    )
}

export default GradientCard