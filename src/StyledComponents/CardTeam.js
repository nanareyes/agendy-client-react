import React from 'react'
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  place-items: center;
  width: 70%;
  height: auto;

  margin: 0 auto;

  .card {
    display: flex;
    justify-content: flex;
    height: auto;
    border-radius: 30px;
    border: 2px solid var(--lila);
    box-shadow: 0px 1px 4px 2px #00000021;
    opacity: 0.8;
    height: 600px;
    width: 100%;

    // configuración de imágenes
    background-origin: content-box;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 1.5rem;

    &-title {
      width: 100%;
      color: var(--vino);
      font-size: 1rem;
      opacity: 1;
    }

    transition: all 0.2s;
  }
  .description {
    width: 100%;
    color: var(--vino);
    justify-content: center;
    font-size: 14px;
    opacity: 1;
  }
`

const CardTeam = ({itemList}) => {
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <Card>
          <CardTitle>{item.title}</CardTitle>
          <CardImg src={item.image}></CardImg>
          <CardBody className="description">
            <p>{item.description}</p>
          </CardBody>
        </Card>
      )
    })
  }

  return <CardContainer>{renderItems(itemList)}</CardContainer>
}

export {CardTeam}
