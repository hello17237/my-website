import React from 'react'
import ProjectsHeader from './ProjectsHeader'
import ProjectsList from './ProjectsList'
import './Projects.css'

//images for projects
import project1 from './ProjectImages/test.JPG'
import project2 from './ProjectImages/test2.jpg'
import project3 from './ProjectImages/test3.JPG'

function Projects() {

    const projects = [
        {
            id: 1,
            imageurl: project1,
            projectName: 'Seam Carving',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 2,
            imageurl: project2,
            projectName: 'Gomoku AI',
            projectDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
            id: 3,
            imageurl: project3,
            projectName: 'Box-Girder Bridge',
            projectDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
        }
    ]

    return(
        <div id='projects' className='ProjectsPage'>
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
