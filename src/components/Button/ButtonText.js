import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

ButtonText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

ButtonText.defaultProps = {
  className: '',
  text: ''
}

export default function ButtonText (props) {
  return (
    <a {...props} className={`btn-text ${props.className}`.trim()}>
      {props.text}
    </a>
  )
}
