import React from 'react'
import logoFooter from '../assets/logoFooter.png'
import {StyledImage} from '../StyledComponents/StyledImage'

import {Box, Container, Row, Column, Heading} from './FooterStyles'
import {Button} from 'primereact/button'

const Footer = () => {
  const names = [
    'Christian Alexander Velasco Narváez',
    'Diana Carolina Reyes Mantilla',
    'Mónica Viviana Colorado Romero',
    'Sonia Milena Mosquera',
    'Yenny Natacha Libreros Montes',
  ]
  const phones = [
    '57 319 572 3583',
    '+57 320 748 3074',
    '+57 318 697 7658',
    '+34 600 715 253',
    '+57 320 692 2383',
  ]

  return (
    <Box>
      <StyledImage src={logoFooter} align-items="left" size="400px" />
      <Container>
        <Row>
          <Column></Column>
          <Column>
            <Heading>INTEGRANTES</Heading>
            <div>
              {names.map((name) => (
                <h6>{name} </h6>
              ))}
            </div>
          </Column>
          <Column>
            <Heading>CONTACTO</Heading>
            <div>
              {phones.map((phone) => (
                <h6>{phone} </h6>
              ))}
            </div>
          </Column>
          <Column>
            <Heading>INFORMACIÓN DEL PROYECTO</Heading>
            <a href="https://agendy-client-react.herokuapp.com/" rel="noopener">
              <Button
                label="Enlace a Heroku"
                icon="pi pi-cloud-upload"
                className="p-button-outlined p-button-text p-button-secondary"
              />
            </a>
            <a
              href="https://github.com/nanareyes/agendy-client-react"
              rel="noopener">
              <Button
                label="Enlace a Git Hub"
                icon="pi pi-github"
                className="p-button-outlined p-button-text p-button-secondary"
              />
            </a>
            <a
              href="https://drive.google.com/drive/u/1/folders/1f3YEgdKhNjnuHdIQe4F5cyCddnUjLuZd"
              rel="noopener">
              <Button
                label="Enlace a la documentación"
                icon="pi pi-book"
                className="p-button-outlined p-button-text p-button-secondary"
              />
            </a>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}
export default Footer
