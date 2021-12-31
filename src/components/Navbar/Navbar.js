import React from 'react'
import Logo from './Logo.js'
import Navlist from './Navlist.js'
import './Navbar.css'
import NavbarIcons from './NavbarIcons.js'

function Navbar({navlinks}) {
    return(
        <div className='Navbar-full'>
            <div className='Navbar'>
                <Logo name='REGIS ZHAO'/>
                <Navlist navlinks={navlinks}/>
                <NavbarIcons/>
            </div>
        </div>
    )
}

export default Navbar