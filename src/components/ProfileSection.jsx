import React,{useEffect} from 'react'
import Socials from './Socials'
import PhotoSection from './PhotoSection'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProfileSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
                <div data-aos='fade-down' className='flex' id='profile-section'>
        <div  id='info-section flex'>
                <div>
                    <p className='small-text'>WELCOME TO MY PORTFOLIO</p>
                    <h1>Hi, I'm <p className="name red">Ziad</p></h1>
                    <h2>a Software Engineer.</h2>
                    <p>
                    I am a <span className='red'>software engineering</span> student experienced in <span className='red'>full-stack development</span>, with a strong interest in <span className='red'>cybersecurity</span>. Explore my portfolio to see my projects and achievements in creating user-friendly websites and enhancing <span className='red'>application security</span>.</p>
                </div>
                <div className='socials-section'>
                    <p className='small-text'>FIND ME IN</p>
                    <Socials />
                </div>
            </div>
            <PhotoSection />
        </div>
    )
}

export default ProfileSection