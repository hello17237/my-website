import React from 'react'
import ProjectsElem from './ProjectsElem'

function ProjectsList({projects}) {
    return(
        <ul className='ProjectsList'>
            {projects.map(project =>
                <ProjectsElem key={project.id} project={project}/>
            )}
        </ul>
    )
}

export default ProjectsList