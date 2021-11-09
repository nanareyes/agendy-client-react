/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Login} from '../Login/Login'
import logo from '../logo.svg'

function Landing(props) {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    </React.Fragment>
  )
}

export { Landing }
