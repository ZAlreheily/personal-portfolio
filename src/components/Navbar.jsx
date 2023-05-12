import React from 'react'
import { Link } from 'react-scroll'
import GradiantButton from './GradiantButton'
import ColorfulName from './ColorfulName'

const Navbar = () => {
    return (
        <>        
        <div className='navbar flex'>
            <ColorfulName />
            <ul className='links-ul flex'>
                <li className='pointer'><Link to="profile-section" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                <li className='pointer'><Link to="" spy={true} smooth={true} offset={-100} duration={500} >Education</Link></li>
                <li className='pointer'><Link to="skills-section" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link></li>
                <li className='pointer'><Link to="projects-section" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link></li>
                <li><GradiantButton><span className='button-text'>Contact Me</span></GradiantButton></li>
            </ul>
        </div>
        </>
        )
}

export default Navbar