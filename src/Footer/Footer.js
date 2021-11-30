import React from 'react'
import logoFooter from '../assets/logoFooter.png'
import styled from 'styled-components'
import {StyledImage} from '../StyledComponents/StyledImage'

const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  opacity: 0.8;
  width: 100%;
  padding-bottom: 60px;
  position: fixed;
  bottom: 0;

  .card {
    display: flex;
    justify-content: flex;
    height: auto;
    opacity: 0.8;
    height: 170px;
    width: 100%;
    padding-bottom: 1rem;
  }
  .tittle {
    color: var(--vino);
  }
`

const ContainerLinks = styled.div`
  .card-links {
    display: flex;
    justify-content: flex;
    height: auto;
    opacity: 0.8;
    padding-bottom: 5px;
    height: 30px;
    width: 100%;
    padding: 1rem;
    background-color: #efbee7;
    position: fixed;
    bottom: 0;
  }
  .link-list {
    all: unset;
    display: flex;
    margin: 2px;
    align-items: center;
    gap: 1rem;
    list-style: none;
    flex-grow: 1;
  }
`

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
    <React.Fragment>
      <ContainerFooter>
        <div className="card tittle">
          INFORMACIÓN SOBRE EL PROYECTO
          <StyledImage src={logoFooter} size="180px" />
        </div>
        <div className="card tittle">
          <ul>
            <li>INTEGRANTES</li>
          </ul>
          {names.map((name) => (
            <h6>{name} </h6>
          ))}
        </div>
        <div className="card tittle">
          <ul>
            <li>CONTACTO</li>
          </ul>

          {phones.map((phone) => (
            <h6>{phone} </h6>
          ))}
        </div>
      </ContainerFooter>
      <ContainerLinks>
        <div className="card-links">
          <a
            className="link-list"
            href="https://github.com/nanareyes/agendy-client-react"
            rel="noopener">
            Enlace a Git
          </a>
          <a
            className="link-list"
            href="http://agendy-client-react.herokuapp.com/"
            rel="noopener">
            Enlace a Heroku
          </a>
        </div>
      </ContainerLinks>
    </React.Fragment>
  )
}

export {Footer}
