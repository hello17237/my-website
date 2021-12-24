import React from 'react'
import Name from './Name.js'
import ScrollButton from './ScrollButton.js'
import './Home.css'


function Home({name}) {
    return (
        <div className='Homepage'>
            <Name name={name}/>
            {/* <ScrollButton destination='#about-me'/> */}
        </div>
    )
}

export default Home