import React from 'react'
import { Button, HeadingSecondary, Input, Radio } from 'components'
import './Form.css'

export default function FormBook (props) {
  return (
    <div className='book'>
      <div className='book__form'>
        <form action='#' className='form'>
          <div className='u-margin-bottom-medium'>
            <HeadingSecondary text='Start booking now' />
          </div>

          <div className='form__group'>
            <Input id='name' label='Full name' />
          </div>

          <div className='form__group'>
            <Input id='email' label='Email address' />
          </div>

          <div className='form__group u-margin-bottom-medium'>
            <Radio id='small' label='Small tour group' name='size' />
            <Radio id='large' label='Large tour group' name='size' />
          </div>
          <div className='form__group'>
            <Button color='green' text='Next step &rarr;' />
          </div>
        </form>
      </div>
    </div>
  )
}
