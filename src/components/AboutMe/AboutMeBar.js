import React from "react";
import ResumeButton from "./ResumeButton";

function AboutMeBar() {
    return (
        <ul className="AboutMeBar">
            <li><a href='https://www.linkedin.com/in/regis-zhao/' target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href='https://github.com/regiszhao' target="_blank"><i class="fab fa-github-square"></i></a></li>
            <ResumeButton/>
        </ul>
    )
}

export default AboutMeBar