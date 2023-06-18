import React from 'react'
import { DownloadsStyles } from '../styles'
import {DownloadsData} from './data'
import DownloadIcon from '../assets/images/download.jpg'

const Downloads = () => {
  return (
    <div style={DownloadsStyles.DownloadsContainer}>
        <div style={DownloadsStyles.DownloadsContainer.title}>Downloads</div>
        <div style={DownloadsStyles.DownloadsContainer.files}>
            {
                DownloadsData.data.map((item, index) => {
                    return(
                        <div style={DownloadsStyles.DownloadsContainer.file}>
                            <div>
                                <a href={item.url} style={DownloadsStyles.DownloadsContainer.file.title} target='_blank'>
                                    {item.name}
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Downloads