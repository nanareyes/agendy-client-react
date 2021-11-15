/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Login } from '../Login/Login'
import logo from '../logo.svg'
import styled from 'styled-components'

const LandingContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

function Landing(props) {

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
