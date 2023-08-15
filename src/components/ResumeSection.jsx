import React, { useState } from 'react'
import ResumeSelector from './ResumeSelector'
import EducationCard from './EducationCard'
import ExperienceSection from './ExperienceSection';

const ResumeSection = () => {
    const [itemClicked, setItemClicked] = useState(0);
    return (
        <div data-aos='fade-down' id="resume-section">
            <h2 className='red'>Resume</h2>
            <ResumeSelector value={itemClicked} setValue={setItemClicked} />

            <div className={`resume-info ${itemClicked != 0 && 'hide'}`}>
                <div className="education flex">
                    <EducationCard />
                </div>
            </div>

            <div className={`resume-info ${itemClicked != 1 && 'hide'}`}>
                <ExperienceSection />
            </div>

        </div>
    )
}

export default ResumeSection