import React from 'react'

function Navlink({link}) {
    return(
        <li className='Navlink'>
            <a href={link.url} className='Navurl'>{link.text}</a>
        </li>
    )
}

export default Navlink