import React from 'react'
import ProjectsHeader from './ProjectsHeader'
import ProjectsList from './ProjectsList'
import './Projects.css'

//images for projects
import test from './ProjectImages/test.JPG'
import test2 from './ProjectImages/test2.jpg'
import test3 from './ProjectImages/test3.JPG'

function Projects() {

    const projects = [
        {
            id: 1,
            imageurl: test,
            projectName: 'blah',
            projectDescription: 'blahhhhblahblahhhh'
        },
        {
            id: 2,
            imageurl: test2,
            projectName: 'blah2',
            projectDescription: 'jwiejfiajwfejaiwefiagih wiehgiwgha'
        },
        {
            id: 3,
            imageurl: test3,
            projectName: 'blah3',
            projectDescription: 'jwiejfiajwfejaiwefiagih wiehgiwgha'
        }
    ]

    return(
        <div className='ProjectsPage'>
            <div className='ProjectsBackground'></div>
            <div className='ProjectsText'>
                <ProjectsHeader/>
                <p className='ProjectsIntro'>Here are some projects I've been working on lately.</p>
                <ProjectsList projects={projects}/>
            </div>
        </div>
    )
}

export default Projects
