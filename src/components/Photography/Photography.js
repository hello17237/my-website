import React from 'react'
import './Photography.css'
import PhotoHeader from './PhotoHeader'
import PhotoGallery from './PhotoGallery'
import PhotoProfile from './PhotoProfile'
import PhotoParagraph from './PhotoParagraph'
import IMAGES from './photos.js'

function Photography() {

    return(
        <div className='PhotoPage'>
            <div className='PhotoProfileContainer'><PhotoProfile/></div>
            <div className='PhotoPageContent'>
                <PhotoHeader/>
                <PhotoParagraph/>
                <PhotoGallery />
            </div>
        </div>
    )
}

export default Photography
