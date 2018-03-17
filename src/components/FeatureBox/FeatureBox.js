import React from 'react'
import PropTypes from 'prop-types'
import { HeadingTertiary } from 'components'
import './FeatureBox.css'

FeatureBox.propTypes = {
  header: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

FeatureBox.defaultProps = {
  header: '',
  icon: '',
  text: ''
}

export default function FeatureBox (props) {
  return (
    <div className='feature-box'>
      <i className={`feature-box__icon ${props.icon}`.trim()} />
      <HeadingTertiary className='u-margin-bottom-small' text={props.header} />
      <p>{props.text}</p>
    </div>
  )
}
