import React from 'react'
import {SkillsContentStyles} from '../../styles'
import {SkillsContentData} from '../data'
import { ProgressBar } from 'react-bootstrap'


const SkillsContent = () => {
  return (
    <div style={SkillsContentStyles.glass}>
        <div style={SkillsContentStyles.text.title}>skills</div>
        <div style={SkillsContentStyles.glass.skillsContainer}>
            {
              SkillsContentData.skills.map((item, index) => {
                return (
                    <div style={SkillsContentStyles.glass.skillsContainer.name}>{item}</div>
                    )})}
          </div>
    </div>
      )
    }
    
    export default SkillsContent
