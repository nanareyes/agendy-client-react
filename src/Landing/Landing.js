/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Login } from '../Login/Login'
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom';

function Landing(props) {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated])

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
