import React from 'react'

function ScrollButton({destination}) {

    return(
        <div className='ScrollButtonContainer'>
            <a className='ScrollButton' href={destination}><i class="fas fa-angle-double-down"></i></a>
        </div>
    )
}

export default ScrollButton