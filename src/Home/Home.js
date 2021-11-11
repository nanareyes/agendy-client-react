import React from 'react'
import { NavBar } from '../NavBar/NavBar'
//import { Container, Row } from 'reactstrap'
import { Card, CardBody, CardImg, CardTitle, CardGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

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
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="./Group.jpg"
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
            src="./Group.jpg"
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
            src="./Group 46.jpg"
            top
            width="100%"
            onClick={onClickAgenda}
          />
          <CardBody>
            <CardTitle tag="h5">AGENDA</CardTitle>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  )
}
export default Home
