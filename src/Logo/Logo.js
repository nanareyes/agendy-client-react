import React from 'react';
import logo from '../logo.svg'

function Logo(props) {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </React.Fragment>
  )
}

export {Logo}

