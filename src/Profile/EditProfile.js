import React from 'react'
import { Card, Col, Label, CardBody, FormGroup, CardHeader, Input, Button, Row } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useProfile } from './controller';

function EditProfile(props) {
  const {
    setInputDateOfBirth,
    setInputPhone,
    setInputDirection,
    setInputCity,
    onProfile,
  } = useProfile();

  // const photeSelecte = (e) => {
  //     e.preventDefault();

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
                    <input type="file"  />
                  </Row>
                </Col>
                <Col sm="7">
                  <FormGroup floating>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      placeholder="dateOfBirth"
                      type="dateOfBirth"
                      value= {setInputDateOfBirth}
                      onChange={(e) =>
                        setInputDateOfBirth(e.target.value)
                      }
                    />
                    <Label for="exampleDateOfBirth">
                      Fecha de nacimiento
                    </Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      type="phone"
                      value= {setInputPhone}
                      onChange={(e) =>
                        setInputPhone(e.target.value)
                      }
                    />
                    <Label for="examplePhone">
                      Teléfono
                    </Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="direction"
                      name="direction"
                      placeholder="direction"
                      type="direction"
                      value={setInputDirection}
                      onChange={(e) =>
                        setInputDirection(e.target.value)
                      }
                    />
                    <Label for="exampleDirection">
                      Dirección
                    </Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="city"
                      name="city"
                      placeholder="city"
                      type="city"
                      value={setInputCity}
                      onChange={(e) =>
                        setInputCity(e.target.value)
                      }
                    />
                    <Label for="exampleCity">
                      Ciudad
                    </Label>
                  </FormGroup>
                </Col>
                <Button className="editProfile" onClick={onProfile} style={{
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