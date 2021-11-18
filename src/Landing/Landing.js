/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Login } from '../Login/Login'
import logo from '../logo.svg'
import styled from 'styled-components'
import { LandingContainer } from '../StyledComponents/LandingContainer'
import { Register } from '../Register/Register'

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

const Landing = () => {
  const returnComponent = () => {
    const path = document.location.pathname
    return path === '/register' ? <Register /> : <Login />
  }

  return (
    <React.Fragment>
      <LandingContainer>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <StyledImage src={logo} alt="logo" />
        {returnComponent()}
      </LandingContainer>
    </React.Fragment>
  )
}

export { Landing }
