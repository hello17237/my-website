import React from 'react'
import AboutMeBar from './AboutMeBar'
import AboutMeHeader from './AboutMeHeader'
import AboutMeParagraph from './AboutMeParagraph'

function AboutMeText() {
    return(
        <div className='AboutMeText'>
            <AboutMeHeader/>
            <AboutMeParagraph/>
            <AboutMeBar/>
        </div>
    )
}

export default AboutMeText