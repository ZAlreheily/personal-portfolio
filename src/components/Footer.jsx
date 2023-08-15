import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex">
            <h3 className='red'>&copy; {year} All rights reserved by Ziad Alreheily</h3>
        </div>
    )
}

export default Footer