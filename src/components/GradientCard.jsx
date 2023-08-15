import React from 'react'

const GradientCard = ({ children, classes = '', onClick }) => {
    return (
        <div className={`gradient-card ${classes}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default GradientCard