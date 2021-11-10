/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import {useLogin} from './controller';

function Login(props) {
  const {
    setInputEmail,
    setInputPassword,
    loginHandler,
  } = useLogin();

  return (
    <React.Fragment>
      <Form inline>
        <Col>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e)=>
                setInputEmail(e.target.value)
              }
            />
            <Label for="exampleEmail">
              Correo
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={(e)=>
              setInputPassword(e.target.value)}
            />
            <Label for="examplePassword">
              Contraseña
            </Label>
          </FormGroup>
          {' '}
          <Button className="login"  onClick={loginHandler}>
            Iniciar Sesión
          </Button>
        </Col>
        <a href="/"> ! olvidé mi contraseña ¡</a>
        <Col>
        <Button className="google" onClick={''}>
        <i class="bi bi-google"></i>
        <span className="google mx-3">Continuar con google</span>
          </Button>
        </Col>
        <Col>
        <a href="/register">crear tu cuenta</a>
        </Col>
      </Form>
    </React.Fragment>
  )
}

export { Login }
