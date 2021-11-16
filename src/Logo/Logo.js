import React from 'react'
import logo from '../logo.svg'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

function Logo(props) {
  return (
    <React.Fragment>
      <StyledImage src={logo} className="App-logo" alt="logo" />
    </React.Fragment>
  )
}

export { Logo }
