import React from 'react'
import './Photography.css'
import PhotoHeader from './PhotoHeader'
import PhotoGallery from './PhotoGallery'
import PhotoProfile from './PhotoProfile'
import PhotoParagraph from './PhotoParagraph'
import IMAGES from './Photos/photos.js'

function Photography() {
    const photoColumn1 = [
        {id: 1, url: IMAGES.p11}, {id: 1, url: IMAGES.p12}
    ]
    const photoColumn2 = [
        {id: 1, url: IMAGES.p21}
    ]
    const photoColumn3 = [
        {id: 1, url: IMAGES.p31}
    ]
    const photoColumns = [photoColumn1, photoColumn2, photoColumn3]

    return(
        <div className='PhotoPage'>
            <div className='PhotoProfileContainer'><PhotoProfile/></div>
            <div className='PhotoPageContent'>
                <PhotoHeader/>
                <PhotoParagraph/>
                <PhotoGallery photoColumns={photoColumns}/>
            </div>
        </div>
    )
}

export default Photography
