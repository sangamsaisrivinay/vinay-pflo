import React from 'react'
import {SkillsContentStyles} from '../../styles'
import {SkillsContentData} from '../data'
import { ProgressBar } from 'react-bootstrap'


const SkillsContent = () => {
  return (
    <div style={SkillsContentStyles.glass}>
        <div style={SkillsContentStyles.text.title}>skills</div>
            {
              SkillsContentData.skills.map((item, index) => {
                return (
                  <div style={SkillsContentStyles.glass.skillsContainer} key={index}>
                    <div style={SkillsContentStyles.glass.skillsContainer.name}>{item.name}</div>
                    <div style={SkillsContentStyles.glass.skillsContainer.level}>
                    <ProgressBar now={item.level} label={`${item.level}%`} style={SkillsContentStyles.glass.skillsContainer.level.bar}/>
                    </div>
                  </div>
            )})}
    </div>
      )
    }
    
    export default SkillsContent
