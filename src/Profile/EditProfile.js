import React from 'react'
import { Card, Col, Label, CardBody, FormGroup, CardHeader, Input, Button, Row } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useProfile } from './controller';


function EditProfile(props) {
  const {
    inputDateOfBirth,
    inputPhone,
    inputAddress,
    inputCity,
    inputUserType,
    setInputDateOfBirth,
    setInputPhone,
    setInputAddress,
    setInputCity,
    setInputUserType,
    userDateOFBirth,
    userPhone,
    userAddress,
    userCity,
    userName,
    userUserType,
    onSubmitProfile,
  } = useProfile();

  // const photeSelecte = (e) => {
  //     e.preventDefault();

  return (
    <React.Fragment>
      <Row>
        <Col sm="4">
          Nombre {userName}<br />
          Fecha de nacimiento {userDateOFBirth} <br />
          Teléfono {userPhone} <br />
          Dirección {userAddress} <br />
          Ciudad {userCity} <br />
          Tipo de usuario {userUserType} <br />
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
                    <input type="file" />
                  </Row>
                </Col>
                <Col sm="7">
                  <FormGroup floating>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
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
                </Col>
                <Button className="editProfile" onClick={onSubmitProfile} style={{
                  backgroundColor: '#E9478A',
                  color: '#ffff'
                }}>
                  Guardar
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}


export { EditProfile };