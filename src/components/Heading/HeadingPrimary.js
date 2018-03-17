import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

HeadingPrimary.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired
}

HeadingPrimary.defaultProps = {
  className: '',
  size: 'main',
  text: ''
}

export default function HeadingPrimary (props) {
  const size = {
    main: 'heading-primary--main',
    sub: 'heading-primary--sub'
  }

  return (
    <h1 className={`heading-primary ${size[props.size]} ${props.className}`.trim()}>
      {props.text}
    </h1>
  )
}
