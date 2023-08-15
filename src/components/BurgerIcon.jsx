import React, { useState } from 'react'
import SideMenu from './SideMenu'

const BurgerIcon = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const openMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
        <button onClick={openMenu}>
            Click
            <SideMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} openMenu={openMenu} setIsMenuOpen={setIsMenuOpen} />
        </button>
        </>
    )
}

export default BurgerIcon