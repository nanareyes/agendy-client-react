import React from 'react'
import { Card, Form, Col, Label, CardBody, FormGroup, CardHeader, Input, Button, Row } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useProfile } from './controller';
import styled from 'styled-components'

const ActionsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  place-items: center;
`

function EditProfile(props) {
  const {
    inputPhoto,
    inputDateOfBirth,
    inputPhone,
    inputAddress,
    inputCity,
    inputUserType,
    setInputPhoto,
    setInputDateOfBirth,
    setInputPhone,
    setInputAddress,
    setInputCity,
    setInputUserType,
    onSubmitProfile,
  } = useProfile();

  // const photeSelecte = (e) => {
  //     e.preventDefault();

  const inputStyle = {
    border: '2px solid var(--vino)',
    color: 'var(--vino)',
    padding: '0.8rem .75rem',
  }

  const formStyle = {
    width: '90%',
    minWidth: '280px',
    display: 'grid',
    alignItems: 'center',
  }

  const buttonStyle = {
    width: '100%',
    backgroundColor: 'var(--fucsia)',
    color: 'var(--white)',
    fontFamily: 'Ubuntu',
    border: 'none',
  }

  const pinkDivider = {
    width: '80%',
    margin: '1rem auto',
    border: '2px solid var(--fucsia)',
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm="4">
        </Col>
        <Col sm="7">
          <Card>
            <CardHeader tag="h3">
              COMPLETA TU PERFIL
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="5">
                  <Row>
                    <input
                    type="file"
                    style={buttonStyle}
                    name="photo"
                    value={inputPhoto}
                    accept="image/png, image/jpeg"
                    onChange={(e) =>
                          setInputPhoto(e.target.value)}
                    />
                  </Row>
                </Col>
                <Col sm="7">
                  <Form style={formStyle} inline>
                    <FormGroup floating>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        style={inputStyle}
                        placeholder="dateOfBirth"
                        type="date"
                        value={inputDateOfBirth}
                        onChange={(e) =>
                          setInputDateOfBirth(e.target.value)
                        }
                      />
                      <Label for="dateOfBirth">
                        Fecha de nacimiento
                      </Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input
                        id="phone"
                        name="phone"
                        style={inputStyle}
                        placeholder="phone"
                        type="text"
                        value={inputPhone}
                        onChange={(e) =>
                          setInputPhone(e.target.value)
                        }
                      />
                      <Label for="phone">
                        Teléfono
                      </Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input
                        id="address"
                        name="address"
                        style={inputStyle}
                        placeholder="address"
                        type="text"
                        value={inputAddress}
                        onChange={(e) =>
                          setInputAddress(e.target.value)
                        }
                      />
                      <Label for="address">
                        Dirección
                      </Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input
                        id="city"
                        name="city"
                        style={inputStyle}
                        placeholder="city"
                        type="text"
                        value={inputCity}
                        onChange={(e) =>
                          setInputCity(e.target.value)
                        }
                      />
                      <Label for="city">
                        Ciudad
                      </Label>
                    </FormGroup>
                    <Row>
                      <Col>
                        <FormGroup check>
                          <Input
                            id="userType"
                            name="userType"
                            placeholder="userType"
                            type="radio"
                            value={inputUserType}
                            onChange={(e) =>
                              setInputUserType(e.target.value)}
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
                            id="userType"
                            name="userType"
                            placeholder="userType"
                            type="radio"
                            value={inputUserType}
                            onChange={(e) =>
                              setInputUserType(e.target.value)}
                          />
                          {' '}
                          <Label check>
                            Soy Estilista
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <ActionsContainer>
                  <Button style={buttonStyle} className="editProfile" onClick={onSubmitProfile} >
                    Guardar
                  </Button>
                </ActionsContainer>
                <hr style={pinkDivider} />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}


export { EditProfile };