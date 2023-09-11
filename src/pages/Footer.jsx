import React from 'react'
import { FooterStyles } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SocialData} from './data'


const Footer = () => {
  return (
    <div style={FooterStyles.footerContainer}>
        <div style={FooterStyles.footerContainer.socialContainer}>
            {
                SocialData.map((item, index) => {
                    // console.log(typeof(item.icon))
                    // console.log((faInstagram))
                    // const iconName=JSON.parse(item.icon)
                   
                    return(
                        <div >
                            <a href={item.link} target='_blank'>
                                {/* {item.name} */}
                                <FontAwesomeIcon key={index} icon={item.icon} 
                                // style={FooterStyles.footerContainer.socialContainer.icons} 
                                style={{ ...FooterStyles.footerContainer.socialContainer.icons, color: item.color, }}
                                />
                            </a>
                        </div>
                    )
                
                })
            }
        </div>
        <div style={FooterStyles.footerContainer.copyRightContainer}>
            made with 🤍, by vinay
        </div>
    </div>
  )
}

export default Footer