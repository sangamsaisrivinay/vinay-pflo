import React from 'react'
import  {ProjectStyles}  from '../styles'
import { ProjectData } from './data'
import Uniswap from '../assets/images/project-banners/uniswap.jpeg'
import '../styles/ProjectStyles.css'

const Projects = () => {
  return (
    <div style={ProjectStyles.projectsContainer}>
        <div style={ProjectStyles.title}>projects</div>
        <div style={ProjectStyles.cardsContainer}>
            {
                ProjectData.projects.map((project, index) => {
                    return(
                        <div style={ProjectStyles.glass}>
                            <img src={project.banner} alt='no image loaded' style={ProjectStyles.glass.banner}/>
                            <div style={ProjectStyles.glass.text}>
                                <div style={ProjectStyles.glass.text.title} className='thinScrollBar'>
                                    {project.title}
                                </div>
                                {project.description&&
                                <div style={ProjectStyles.glass.text.description} className='thinScrollBar'>
                                    {project.description}
                                </div>
                                }
                                {project.journal&&
                                <div style={ProjectStyles.glass.text.journal}>
                                    {project.journal}
                                    {
                                        project.conference&&
                                        <span>- {project.conference}</span>
                                    }
                                </div>}
                                <div style={ProjectStyles.glass.text.link}>
                                    <a href={project.link} style={ProjectStyles.glass.text.link.linkText}>view</a>
                                </div>
                            </div>
                        </div> 
                )})
            }
        </div>
    </div>
  )
}

export default Projects


