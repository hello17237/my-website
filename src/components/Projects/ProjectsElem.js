import React from 'react'

function ProjectsElem({project}) {
    return(
        <li className='ProjectsElem'>
            <img className='ProjectImage' src={project.imageurl} />
            <div className='ProjectsElemText'>
                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
            </div>
        </li>
    )
}

export default ProjectsElem