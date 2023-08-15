import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'
import GradientCard from './GradientCard'

const SideMenu = ({ closeMenu, isMenuOpen, openMenu, setIsMenuOpen }) => {
    // const handleOnOpen = () => {

    // };

    // onOpen={handleOnOpen}
    const changeState = (state) => {
        console.log(state.isOpen)
        setIsMenuOpen(state.isOpen)
    }
    return (
        <>
            <Menu isOpen={isMenuOpen} right onStateChange={ changeState } >
                <div className='side-menu flex'>
                    <ul className=' links-ul side-links-ul flex'>
                        <li className='pointer side-link' ><Link to="profile-section" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
                        <li className='pointer side-link' ><Link to="resume-section" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Resume</Link></li>
                        <li className='pointer side-link' ><Link to="skills-section" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skills</Link></li>
                        <li className='pointer side-link' ><Link to="projects-section" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link></li>
                        <li><Link className='red' to="contact-section" spy={true} smooth={true} offset={-100} duration={500} ><GradientCard classes='hover-effect pointer'>Contact Me</GradientCard></Link></li>
                    </ul>
                </div>
            </Menu>
        </>
    )
}

export default SideMenu