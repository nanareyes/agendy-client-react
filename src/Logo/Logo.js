import React from 'react'
import logo from '../logo.svg'

import { StyledImage } from '../StyledComponents/StyledImage'

function Logo(props) {
  return (
    <React.Fragment>
      <StyledImage size="300px" src={logo} className="App-logo" alt="logo" />
    </React.Fragment>
  )
}

export { Logo }
