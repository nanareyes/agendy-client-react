import React from 'react';
import logo from '../logo.svg'
import styled from 'styled-components'


const LogoContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

function Logo(props) {
  return (
    <React.Fragment>
      <LogoContainer>
        <StyledImage src={logo} className="App-logo" alt="logo" />
      </LogoContainer>
    </React.Fragment>
  )
}

export { Logo }

