import React from 'react'
import ProjectsElem from './ProjectsElem'
import './ProjectsListAnimation'

function ProjectsList({projects}) {
    return(
        <ul className='ProjectsList'>
            {projects.map(project =>
                <ProjectsElem key={project.id} project={project}/>
            )}
            {/* <script src='ProjectsListAnimation.js'></script> */}
        </ul>
    )
}

export default ProjectsList