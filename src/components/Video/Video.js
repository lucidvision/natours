import React from 'react'
import videomp4 from 'assets/video.mp4'
import videowebm from 'assets/video.webm'
import './Video.css'

export default function Video (props) {
  return (
    <div className='bg-video'>
      <video className='bg-video__content' autoPlay muted loop>
        <source src={videomp4} type='video/mp4' />
        <source src={videowebm} type='video/webm' />
        Your browser is not supported!
      </video>
    </div>
  )
}
