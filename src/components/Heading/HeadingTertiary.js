import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

HeadingTertiary.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

HeadingTertiary.defaultProps = {
  className: '',
  text: ''
}

export default function HeadingTertiary (props) {
  return (
    <h3 className={`heading-tertiary ${props.className}`.trim()}>
      {props.text}
    </h3>
  )
}
