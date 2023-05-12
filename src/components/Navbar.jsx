import React from 'react'
import GradiantButton from './GradiantButton'
import ColorfulName from './ColorfulName'

const Navbar = () => {
    return (
        <div className='navbar flex'>
            <ColorfulName/>
            <ul className='links-ul flex'>
                <li><a href="#info-section">Home</a></li>
                <li><a href="">Education</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><GradiantButton><span className='button-text'>Contact Me</span></GradiantButton></li>
            </ul>
        </div>)
}

export default Navbar