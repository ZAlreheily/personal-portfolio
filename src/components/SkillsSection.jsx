import React, { useEffect } from 'react'
import CardsHolder from './CardsHolder'
import SkillCard from './SkillCard'
import Aos from 'aos';
import 'aos/dist/aos.css'

const SkillsSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos='fade-right' id='skills-section'>
            <h2 className='red'>Skills</h2>
            <CardsHolder>
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
            </CardsHolder>
            <CardsHolder>
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
                <SkillCard
                    title='Front-End Development'
                    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam laborum provident sint architecto sit placeat? Eos sequi quod minus, labore doloribus itaque quasi explicabo harum quas, fugit ducimus repellat.'
                    icon='M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z'
                />
            </CardsHolder>
        </div>
    )
}

export default SkillsSection