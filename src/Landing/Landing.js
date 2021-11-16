/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Login } from '../Login/Login'
import logo from '../logo.svg'
import styled from 'styled-components'
import { LandingContainer } from '../StyledComponents/LandingContainer'

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

const Landing = () => {
  return (
    <React.Fragment>
      <LandingContainer>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <StyledImage src={logo} alt="logo" />
        <Login />
      </LandingContainer>
    </React.Fragment>
  )
}

export { Landing }
