import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

HeadingSecondary.propTypes = {
  text: PropTypes.string.isRequired
}

HeadingSecondary.defaultProps = {
  text: ''
}

export default function HeadingSecondary (props) {
  return (
    <h2 className='heading-secondary'>
      {props.text}
    </h2>
  )
}
