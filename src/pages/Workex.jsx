import React from 'react'
import '../styles/Work.css'
import { WorkData } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Workex = () => {
  return (
    <div className='work-container'>
      <h1 className='exp-title'>work experience</h1>
      {
        WorkData.data.map((item)=>{
          return (
            <div className="child-container">
              <a href={item['company-profile']} target='_blank'>
              <img
                className="logo"
                src={item['logo-url']}
                alt="no img"
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "black",
                }}
                />
                </a>
              <div className='child-container-one'>
              <h4 className="role-name">{item.role}</h4>
              <p className="comp-name-type">{item.company} - {item.type}</p>
              <p className="duration">{item.duration}</p>
              <p className="location-mode">{item.location} - {item.mode}</p>
              <div className='work-url-container'>
                {
                  item.links &&
                  item.links.map((linkItem)=>{
                    return(
                      <a href={linkItem.url} target='_blank' className='work-url'>
                        {linkItem.name}
                        <FontAwesomeIcon icon={faExternalLinkAlt}/>
                      </a>
                    )
                  })
                }
              </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Workex