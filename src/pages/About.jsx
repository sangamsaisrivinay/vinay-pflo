import React from 'react'
import {AboutStyles} from '../styles' //
import { AboutData } from './data' //
import AboutPhoto from '../assets/images/photo.jpg' //
import '../assets/fonts/aboutMeTextFont.css' //
import {Bolts } from './bolt-decor' //

const About = () => {
  return (
    <div style={AboutStyles.bgimage}>
        <div className="display-1" style={AboutStyles.title}>
            <span style={AboutStyles.title.text}>about me</span>
        </div>
        <div style={AboutStyles.glass} className='row'>
            <Bolts />
                <div className="col-lg-4" style={AboutStyles.glass.photoContainer}>
                    <div className="photo" style={AboutStyles.glass.photoContainer1}>
                        <img src={AboutPhoto} alt="photo" style={AboutStyles.glass.photo}/>
                    </div>
                </div>
                <div className="col-lg-8" style={AboutStyles.glass.textContainer}>
                    <div className="text-content aboutText" style={AboutStyles.glass.text}>
                        {AboutData.text}
                    </div>
                </div>
            <Bolts />
        </div>
    </div>
  )
}

export default About