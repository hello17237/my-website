import React, {useState, useEffect} from "react";
import IMAGES from "./photos";

function PhotoGalleryColumn({photos, colWidth}) {
    return(
        <div style={{width:colWidth}} className='galleryColumn'>
            {photos.map(photo =>
                <img className='Image' loading="lazy" src={IMAGES[photo]}/>
            )}
        </div>
    )
}

function detNumCols(windowWidth) {
    let numCols;
    const fourPicWidth = 1500;
    const threePicWidth = 900;
    const twoPicWidth = 600;
    if (windowWidth >= fourPicWidth) {numCols = 4;}
    else if (windowWidth >= threePicWidth && windowWidth < fourPicWidth) {numCols = 3;}
    else if (windowWidth >= twoPicWidth && windowWidth < threePicWidth) {numCols = 2;}
    else {numCols = 1;}
    return(numCols)
}

function arrangePics(numCols, numImages) {
    let photoColumnDict, whichCol;
    //initialize photo column dict
    photoColumnDict = {};
    for (let i = 0; i < numCols; i++) {
        photoColumnDict[i.toString()] = [];
    }
    //distribute images
    for (let i = 0; i < numImages; i++) {
        whichCol = (i % numCols).toString()
        photoColumnDict[whichCol].push(i.toString())
    }
    return(photoColumnDict)
}

function detColWidth(numCols) {
    let colWidth;
    if (numCols == 1) {colWidth = 100;}
    else {colWidth = 95/numCols;}
    return (colWidth.toString())
}


function PhotoGallery() {
    const initNumCols = detNumCols(window.innerWidth);
    const numImages = Object.keys(IMAGES).length;
    const [numCols, setNumCols] = useState(initNumCols)
    const [photoColDict, setPhotoColDict] = useState(arrangePics(initNumCols, numImages))
    //usestate for numCols
    //usestate for change in pic distrib
    //useeffect to detect change in window width, runs detNumCols and updates numcols
    const resizeHandler = () => {
        setNumCols(detNumCols(window.innerWidth))
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])
    //setNumCols to updated numcols
    //useeffect to detect change in numcols, runs redistribution of pics and updates pic distrib
    useEffect(() => {
        setPhotoColDict(arrangePics(numCols, numImages));
    }, [numCols])

    return (
        <div className='Gallery'>
            {Object.keys(photoColDict).map(photoCol =>
                <PhotoGalleryColumn photos={photoColDict[photoCol]} colWidth={detColWidth(numCols).concat('%')}/>
            )}
        </div>
    )
}

export default PhotoGallery
