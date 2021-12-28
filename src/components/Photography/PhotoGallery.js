import React from "react";

function PhotoGalleryColumn({photos}) {
    return(
        <div className='galleryColumn'>
            {photos.map(photo =>
                <img className='Image' key={photo.id} src={photo.url}/>
            )}
        </div>
    )
}

function PhotoGallery({photoColumns}) {
    return (
        <div className='Gallery'>
            <PhotoGalleryColumn photos={photoColumns[0]}/>
            <PhotoGalleryColumn photos={photoColumns[1]}/>
            <PhotoGalleryColumn photos={photoColumns[2]}/>
        </div>
    )
}

export default PhotoGallery