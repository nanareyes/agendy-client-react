import React from "react";
import { Card, CardBody, Row, Col, CardImg, CardTitle, CardGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import agenda from '../assets/imagesHome/agenda.jpg'
import manosypies from '../assets/imagesHome/manosypies.jpg'
import { NavBar } from '../NavBar/NavBar';

const Home = () => {
  const history = useNavigate()
  const onClickManosypies = () => {
    history('/home')
  }
  const onClickGaleria = () => {
    history('/home')
  }
  const onClickAgenda = () => {
    history('/home')
  }
  return (
    <div>
      <NavBar />
      <Row>
        <Col sm="2">
        </Col>
        <Col sm="8">
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                src={manosypies}
                top
                width="100%"
                onClick={onClickManosypies}
              />
              <CardBody>
                <CardTitle tag="h5">MANOS Y PIES</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src={manosypies}
                top
                width="100%"
                onClick={onClickGaleria}
              />
              <CardBody>
                <CardTitle tag="h5">GALERIA</CardTitle>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src={agenda}
                top
                width="100%"
                onClick={onClickAgenda}
              />
              <CardBody>
                <CardTitle tag="h5">AGENDA</CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  )
}

export { Home }
