import React from 'react'
import logoGreenSmall1x from 'assets/logo-green-small-1x.png'
import logoGreenSmall2x from 'assets/logo-green-small-2x.png'
import logoGreen1x from 'assets/logo-green-1x.png'
import logoGreen2x from 'assets/logo-green-2x.png'

export default function LogoLarge (props) {
  return (
    <picture className='logoLarge'>
      <source srcSet={`${logoGreenSmall1x} 1x, ${logoGreenSmall2x} 2x`}
        media='(max-width: 37.5em)' />
      <img srcSet={`${logoGreen1x} 1x, ${logoGreen2x} 2x`} alt='Full logo' src={logoGreen2x} />
    </picture>
  )
}
