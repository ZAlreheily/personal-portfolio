import React from 'react'
import Socials from './Socials'
import PhotoSection from './PhotoSection'

const ProfileSection = () => {
    return (
        <div className='profile-section flex'>
            <div id='info-section flex'>
                <div>
                    <p className='small-text'>WELCOME TO MY PORTFOLIO</p>
                    <h1>Hi, I'm <p className="name red">Ziad</p></h1>
                    <h2>a Software Engineer.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique impedit, in explicabo provident nihil, ipsam quod veritatis, soluta labore commodi quas nulla quidem. Consectetur quidem mollitia tempore eius error.</p>
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