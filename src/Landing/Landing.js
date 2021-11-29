/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'
import {ResetPassword} from '../Password/ResetPassword'
import logo from '../logo.svg'
import styled from 'styled-components'
import {LandingContainer} from '../StyledComponents/LandingContainer'

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

const Landing = () => {
  const path = document.location.pathname
  return (
    <React.Fragment>
      <LandingContainer>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <StyledImage src={logo} alt="logo" />
        {(path === '/login' || path === '/') && <Login />}
        {path === '/register' && <Register />}
        {path.startsWith('/resetpassword') && <ResetPassword />}
      </LandingContainer>
    </React.Fragment>
  )
}

export {Landing}
