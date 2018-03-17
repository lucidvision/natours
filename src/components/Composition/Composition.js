import React from 'react'
import nat1 from 'assets/nat-1.jpg'
import nat2 from 'assets/nat-2.jpg'
import nat3 from 'assets/nat-3.jpg'
import nat1Large from 'assets/nat-1-large.jpg'
import nat2Large from 'assets/nat-2-large.jpg'
import nat3Large from 'assets/nat-3-large.jpg'
import './Composition.css'

export default function Composition (props) {
  return (
    <div className='composition'>
      <img
        src={nat1}
        srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
        alt='First'
        className='composition__photo composition__photo--p1' />
      <img
        src={nat2}
        srcSet={`${nat2} 300w, ${nat2Large} 1000w`}
        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
        alt='Second'
        className='composition__photo composition__photo--p2' />
      <img
        src={nat3}
        srcSet={`${nat3} 300w, ${nat3Large} 1000w`}
        sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
        alt='Third'
        className='composition__photo composition__photo--p3' />
    </div>
  )
}
