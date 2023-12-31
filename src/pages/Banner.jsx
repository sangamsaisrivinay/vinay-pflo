import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; //
import { faLaptop } from '@fortawesome/free-solid-svg-icons'; //
import {BannerStyles} from '../styles' //
import '../styles/Banner.css' //
import '../assets/fonts/bannerNameFont.css'//
import { Bolts } from './bolt-decor' //

const Banner = () => {
  return (
    <div style={BannerStyles.bgimage} id='banner-bg'>
        <div style={BannerStyles.glass} className='glass'>
            <Bolts/>
            <div style={BannerStyles.content}>
                <div style={BannerStyles.content.greet} className='greet'>hi there, i'm</div>
                <div style={BannerStyles.content.main} className='main'>sai sri vinay reddy sangam</div>
            <div style={BannerStyles.content.badge}>
              <FontAwesomeIcon icon={faLaptop} style={{"marginRight":"5px"}} />
              Engineer<span className='blinker'>_</span></div>
            </div>
            <Bolts />
        </div>
      <div style={BannerStyles.bgimage.jumpingButton} className='jumpingButton'>
      <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default Banner