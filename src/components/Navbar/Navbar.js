import React from 'react'
import Logo from './Logo.js'
import Navlist from './Navlist.js'
import './Navbar.css'

function Navbar({navlinks}) {
    return(
        <div className='Navbar-full'>
            <div className='Navbar'>
                {/* <Logo name='REGIS ZHAO'/> */}
                <Navlist navlinks={navlinks}/>
            </div>
        </div>
    )
}

export default Navbar