import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
    return (
        <div className='experiences flex'>
            <ExperienceCard
                name="Software Engineering Course Grader"
                company='King Fahd University of Petroleum and Minerals (KFUPM)'
                duration='Feb 2022 - May 2022'
                description='Responsible for marking homework assignments for students in SWE206 (Introduction to Software Engineering).'
            />

            <ExperienceCard
                name="Information & Computer Science Course Grader"
                company='King Fahd University of Petroleum and Minerals (KFUPM)'
                duration='Oct 2022 - Dec 2022'
                description='Responsible for marking homework assignments for students in ICS108 (Object Oriented Programming).'
            />

            <ExperienceCard
                name="Cybersecurity Summer Intern"
                company='YANPET - SABIC Affiliate'
                duration='June 2023 - Aug 2023'
                description={`Collaborated with the cybersecurity team to implement cybersecurity measures for Operational Technology (OT) systems at Yanpet.`}
                
            />
        </div>
    )
}

export default ExperienceSection