import React from 'react'
import PropTypes from 'prop-types'
import { HeadingTertiary } from 'components'
import './Story.css'

Story.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

Story.defaultProps = {
  imagePath: '',
  name: '',
  title: '',
  description: ''
}

export default function Story (props) {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img src={props.imagePath} alt={props.name} className='story__img' />
        <figcaption className='story__caption'>{props.name}</figcaption>
      </figure>
      <div className='story__text'>
        <HeadingTertiary className='u-margin-bottom-small' text={props.title} />
        <p>{props.description}</p>
      </div>
    </div>
  )
}
