import React from 'react'
import Name from './Name.js'
import ScrollButton from './ScrollButton.js'
import './Home.css'


function Home({name}) {
    return (
        <div id='home' className='Homepage'>
            <div className='HomeBackground'></div>
            <Name name={name}/>
            <ScrollButton destination='#about-me'/>
        </div>
    )
}

export default Home