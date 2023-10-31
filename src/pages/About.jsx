import React from 'react'
import {AboutStyles} from '../styles' //
import { AboutData } from './data' //
import AboutPhoto from '../assets/images/photo.jpg' //
import '../assets/fonts/aboutMeTextFont.css' //
import {Bolts } from './bolt-decor' //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia} from '@fortawesome/free-solid-svg-icons'
import '../styles/aboutGlobeStyle.css'

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
                        <img src={AboutPhoto} alt="loading" style={AboutStyles.glass.photo}/>
                    </div>
                </div>
                <div className="col-lg-8" style={AboutStyles.glass.textContainer}>
                    <div className="text-content aboutText" style={AboutStyles.glass.text}>
                        {AboutData.text}
                    </div>
                </div>
            <Bolts />
        </div>
        <div style={AboutStyles.location}>
            <FontAwesomeIcon icon={faGlobeAsia} id="globe"/>
            <h5>
                India
                </h5>
        </div>
    </div>
  )
}

export default About