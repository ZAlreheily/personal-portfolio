import React from 'react'
import GradiantButton from './GradiantButton'
const SocialIcon = ({ children, href }) => {
    return (
        <GradiantButton classes={'social-icon flex'} href={href}>
            {children}
        </GradiantButton>

    )
}

export default SocialIcon