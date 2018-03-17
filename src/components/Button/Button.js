import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  color: 'white',
  text: ''
}

export default function Button (props) {
  const color = {
    white: 'btn--white',
    green: 'btn--green'
  }
  return (
    <a {...props} className={`btn ${color[props.color]} ${props.className}`.trim()}>
      {props.text}
    </a>
  )
}
