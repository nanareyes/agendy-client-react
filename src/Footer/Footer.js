import React from 'react'
import {Card, CardTitle, CardGroup} from 'reactstrap'
import logoFooter from '../assets/logoFooter.png'
import {StyledImage} from '../StyledComponents/StyledImage'

const Footer = () => {
  return (
    <CardGroup>
      <Card>
        <CardTitle tag="h5">INFORMACIÓN SOBRE EL PROYECTO</CardTitle>
        <StyledImage src={logoFooter} size="180px" />
        Acceso a git: https://github.com/nanareyes/agendy-client-react
      </Card>

      <Card>
        <CardTitle tag="h5">INTEGRANTES</CardTitle>
        <ul>
          <li>Christian Alexander Velasco</li>
          <li>Diana Carolina Reyes Mantillla</li>
          <li>Monica Colorado Romero</li>
          <li>Sonia Milena Mosquera</li>
          <li>Yenny Natacha Libreros Montes</li>
        </ul>
      </Card>
      <Card>
        <CardTitle tag="h5">INFORMACION DE CONTACTO</CardTitle>
        <ul>
          <li>+57 319 572 3583</li>
          <li>+57 320 748 3074</li>
          <li>+57 318 697 7658</li>
          <li>+34 600 715 253</li>
          <li>+57 320 692 2383</li>
        </ul>
      </Card>
    </CardGroup>
  )
}

export {Footer}
