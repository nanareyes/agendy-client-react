import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  place-items: center;
  width: 70%;
  margin: 0 auto;
  .nav-link {
    width: 100%;
  }

  .card {
    display: grid;
    justify-content: flex-end;
    border-radius: 43px;
    border: 2px solid var(--lila);
    box-shadow: 0px 1px 4px 2px #00000021;
    opacity: 0.8;

    // configuración de imágenes
    height: 100px;
    width: 100%;
    background-origin: content-box;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 1.5rem;

    .title {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      color: var(--vino);
      font-size: 10 px;
      opacity: 1;
    }
    .descrption {
      color: var(--vino);
      font-size: 1rem;
      opacity: 1;
    }

    transition: all 0.2s;
  }
`

const CardTeam = ({itemList}) => {
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <CardContainer>
          <div className="card-title">
            <p>{item.title}</p>
          </div>
          <div
            className="card"
            style={{backgroundImage: `url(${item.image})`}}></div>
          <div className="card-description">
            <p>{item.description}</p>
          </div>
        </CardContainer>
      )
    })
  }

  return <CardContainer>{renderItems(itemList)}</CardContainer>
}

export {CardTeam}
