import React from 'react'
import { Link } from 'react-scroll'
import GradientCard from './GradientCard'
import ColorfulName from './ColorfulName'
import BurgerIcon from './BurgerIcon'
const Navbar = () => {
    return (
        <>
            <div className='navbar flex'>
                <ColorfulName />
                <ul className='links-ul flex'>
                    <li className='pointer'><Link to="profile-section" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                    <li className='pointer'><Link to="resume-section" spy={true} smooth={true} offset={-100} duration={500} >Resume</Link></li>
                    <li className='pointer'><Link to="skills-section" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link></li>
                    <li className='pointer'><Link to="projects-section" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link></li>
                    <li><Link className='red' to="contact-section" spy={true} smooth={true} offset={-100} duration={500} ><GradientCard classes='hover-effect pointer'>Contact Me</GradientCard></Link></li>
                </ul>
                {/* <BurgerIcon/> */}
            </div>
        </>
    )
}

export default Navbar