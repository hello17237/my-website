import React from "react";
import profileImage from './PhotoProfile.jpg'

function PhotoProfile() {
    return (
        <div id="photography" className="PhotoProfile">
            <img className="profileImage" src={profileImage}/>
        </div>
    )
}

export default PhotoProfile