import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'
import './Card.css'

Card.propTypes = {
  color: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  detailsList: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired
}

Card.defaultProps = {
  color: '',
  header: '',
  detailsList: ''
}

export default function Card (props) {
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className={`card__picture card__picture--${props.color}`}>
          &nbsp;
        </div>
        <h4 className='card__heading'>
          <span className={`card__heading-span card__heading-span--${props.color}`}>{props.header}</span>
        </h4>
        <div className='card__details'>
          {props.detailsList}
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${props.color}`}>
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>Only</p>
            <p className='card__price-value'>{props.price}</p>
          </div>
          <Button href='#popup' text='Book now' />
        </div>
      </div>
    </div>
  )
}
