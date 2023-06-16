import React from 'react'
import {SchoolStyles} from '../styles'
import { SchoolsData } from './data'
import '../assets/fonts/schoolsFonts.css'


const Schools = () => {
  return (
    <div style={SchoolStyles.schoolsContainer}>
        <div className="title" style={SchoolStyles.title}>
            academic qualifications
        </div>
        {SchoolsData.data.map((school,index)=>{
            return(
                <div style={SchoolStyles.card}>
                    <div style={SchoolStyles.card.lineOne}>
                        <div style={SchoolStyles.card.lineOne.schoolName}>
                            {school.name}
                        </div>
                        <div style={SchoolStyles.card.lineOne.year}>
                            {school.year}
                        </div>
                    </div>
                    <div style={SchoolStyles.card.lineTwo}>
                        <div style={SchoolStyles.card.lineTwo.course}>
                            {school.course}
                        </div>
                        {school.branch&&
                        <div style={SchoolStyles.card.lineTwo.branch}>
                             | {school.branch}
                        </div>
                        }
                    </div>
                    <div style={SchoolStyles.card.lineThree}>
                        <div>
                            {school.board}
                        </div>
                        <div>
                            GPA: {school.cgpa}
                        </div>
                    </div>
                </div>
        )})}
    </div>
  )
}

export default Schools