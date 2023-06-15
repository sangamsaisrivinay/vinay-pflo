import React from 'react'
import  {ProjectStyles}  from '../styles'
import { ProjectData } from './data'
import Uniswap from '../assets/images/project-banners/uniswap.jpeg'
const Projects = () => {
  return (
    <div style={ProjectStyles.projectsContainer}>
        <div style={ProjectStyles.title}>projects</div>
        <div style={ProjectStyles.cardsContainer}>
            {
                ProjectData.data.map((project, index) => {
                    return(
                        <div style={ProjectStyles.glass}>
                            <img src={Uniswap} alt='no image loaded' style={ProjectStyles.glass.banner}/>
                            <div style={ProjectStyles.glass.text}>
                                <div style={ProjectStyles.glass.text.title}>
                                    {project.title}
                                </div>
                                <div style={ProjectStyles.glass.text.description}>
                                    {project.description}
                                </div>
                                <div style={ProjectStyles.glass.text.link}>
                                    <a href={project.link} style={ProjectStyles.glass.text.link.linkText}>view project</a>
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


{/* <div style={ProjectStyles.glass}>
                <img src={Uniswap} alt='no image loaded' style={ProjectStyles.glass.banner}/>
                <div style={ProjectStyles.glass.text.title}>
                    hello
                </div>
                <div style={ProjectStyles.glass.text}>
                    hello
                </div>
            </div> */}