import React from 'react'
import PropTypes from 'prop-types'
import './Radio.css'

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Radio.defaultProps = {
  id: '',
  label: '',
  name: ''
}

export default function Radio (props) {
  return (
    <div className='radio'>
      <input type='radio' className='radio-input' id={props.id} name={props.name} />
      <label for={props.id} className='radio-label'>
        <span className='radio-button' />
        {props.label}
      </label>
    </div>
  )
}
