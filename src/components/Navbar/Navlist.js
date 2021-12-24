import React from 'react'
import Navlink from './Navlink.js'

function Navlist({navlinks}) {
    return(
        <ul className='Navlist'>
            {navlinks.map(navlink =>
                <Navlink key={navlink.id} link={navlink}/>
            )}
        </ul>
    )
}

export default Navlist