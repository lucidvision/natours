import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Input.defaultProps = {
  id: '',
  label: ''
}

export default function Input (props) {
  return (
    <div>
      <input type='text' className='input' placeholder={props.label} id={props.id} required />
      <label for={props.id} className='input__label'>{props.label}</label>
    </div>
  )
}
