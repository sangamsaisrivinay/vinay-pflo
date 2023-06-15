import React from 'react'
import  BoltStyles  from './Bolts.json'
import './Bolts.css' 
const Bolts = () => {
  return (
    <div style={BoltStyles.screwContainer}>
        <span style={BoltStyles.screw} className='screw'></span>
        <span style={BoltStyles.screw} className='screw'></span>
    </div>
  )
}

export default Bolts