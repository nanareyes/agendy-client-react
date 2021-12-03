import React from 'react'
import logoFooter from '../assets/logoFooter.png'
import styled from 'styled-components'
import {StyledImage} from '../StyledComponents/StyledImage'

const ContainerFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  opacity: 0.8;
  width: 100%;

  .footer-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.8;
    width: 100%;
    padding: 1rem;
    border: 1px solid lightpink;
  }
  .title {
    color: var(--vino);
  }
  p.info {
    padding: 0;
    margin-bottom: 0;
  }
`

const ContainerLinks = styled.div`
  .card-links {
    display: flex;
    justify-content: flex;
    height: auto;
    opacity: 0.8;
    padding: 0, 5rem;
    height: fit-content;
    width: 100%;
    padding: 1rem;
    background-color: #efbee7;
  }
  .link-list {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-grow: 1;
    cursor: pointer;
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
    '+57 319 572 3583',
    '+57 320 748 3074',
    '+57 318 697 7658',
    '+34 600 715 253',
    '+57 320 692 2383',
  ]

  return (
    <React.Fragment>
      <ContainerFooter>
        <div className="footer-card">
          <ul>
            <li className="title">INTEGRANTES</li>
          </ul>
          {names.map((name, key) => (
            <p className="info" key={key}>
              {name}{' '}
            </p>
          ))}
        </div>
        <div className="footer-card">
          <ul>
            <li className="title">CONTACTO</li>
          </ul>

          {phones.map((phone, key) => (
            <p className="info" key={key}>
              {phone}{' '}
            </p>
          ))}
        </div>
      </ContainerFooter>
      <ContainerLinks>
        <div className="card-links">
          <a
            className="link-list"
            href="https://github.com/nanareyes/agendy-client-react"
            target="_blank">
            <i className="pi pi-github"></i>
            Enlace a Git
          </a>
        </div>
      </ContainerLinks>
    </React.Fragment>
  )
}

export {Footer}
