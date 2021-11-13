/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Login } from '../Login/Login'
import logo from '../logo.svg'


function Landing(props) {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col>
          <Login />
        </Col>
      </Row>
    </React.Fragment>

  )
}

export { Landing }
