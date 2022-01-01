import React from 'react'
import AboutMeText from './AboutMeText'
import './AboutMe.css'
import './AboutMeAnimation'

function AboutMe() {
    return (
        <div id='about-me' className='AboutMePage'>
            <AboutMeText/>
            <script src='AboutMeAnimation.js'></script>
        </div>
    )
}

export default AboutMe