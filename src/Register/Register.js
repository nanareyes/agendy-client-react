import React from 'react';
import { Form, FormGroup, Col, Input, Label, Button, Row } from 'reactstrap';
import { Logo } from '../Logo/Logo';
import { useRegister } from './controller';
import { RegisterAuth0 } from './RegisterAuth0';


function Register(props) {
  const {
    setInputName,
    setInputEmail,
    setInputPassword,
    setInputPassword2,
    setInputType,
    onRegister,
  } = useRegister();

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Logo />
        </Col>
        <Col>
          <Form inline>
            <Col>
              <FormGroup floating>
                <Input
                  id="Name"
                  name="name"
                  placeholder="Name"
                  type="name"
                  onChange={(e) =>
                    setInputName(e.target.value)
                  }
                />
                <Label for="exampleEmail">
                  Nombres
                </Label>
              </FormGroup>
              {' '}
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
              {' '}
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
              {' '}
              <FormGroup floating>
                <Input
                  id="examplePassword2"
                  name="password2"
                  placeholder="Password2"
                  type="password"
                  onChange={(e) =>
                    setInputPassword2(e.target.value)}
                />
                <Label for="examplePassword">
                  Confirmar contraseña
                </Label>
              </FormGroup>
            </Col>
            <Row>
              <Col>
                <FormGroup check>
                  <Input
                    id="TypeCliente"
                    name="TypeCliente"
                    placeholder="TypeCliente"
                    type="radio"
                    onChange={(e) =>
                      setInputType(e.target.value)}
                  />
                  {' '}
                  <Label check>
                    Soy Cliente
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Input
                    id="TypeCliente"
                    name="TypeCliente"
                    placeholder="TypeCliente"
                    type="radio"
                    onChange={(e) =>
                      setInputType(e.target.value)}
                  />
                  {' '}
                  <Label check>
                    Soy Estilista
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Col>
              <Button className="register" onClick={onRegister}>
                Registrarme
              </Button>
            </Col>
            <br />
            <Col>
            <RegisterAuth0 />
            </Col>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export { Register };
