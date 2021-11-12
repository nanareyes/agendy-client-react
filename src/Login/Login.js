/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import { useLogin } from './controller';
import { LoginWithGoogle } from './LoginWithGoogle';

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
              onChange={(e) =>
                setInputEmail(e.target.value)
              }
            />
            <Label for="exampleEmail">
              Correo
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setInputPassword(e.target.value)}
            />
            <Label for="examplePassword">
              Contraseña
            </Label>
          </FormGroup>
          <div>
            <Button className="login" onClick={loginHandler}>
              Iniciar Sesión
            </Button>
          </div>
        </Col>
        <Col>
          <a href="/"> ! olvidé mi contraseña ¡</a>
        </Col>
        <Col>
          <LoginWithGoogle />
        </Col>
        <Col>
          <a href="/register">crear tu cuenta</a>
        </Col>
      </Form>
    </React.Fragment>
  )
}

export { Login }
