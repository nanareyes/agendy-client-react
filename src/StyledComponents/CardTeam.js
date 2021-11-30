import React from 'react'
import {Button} from 'primereact/button'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  place-items: center;
  width: 70%;
  height: auto;
  padding: 1rem;

  margin: 0 auto;

  .card {
    display: flex;
    justify-content: flex;
    height: auto;
    gap: 0.5rem;
    border-radius: 30px;
    border: 2px solid var(--lila);
    box-shadow: 0px 1px 4px 2px #00000021;
    opacity: 0.8;
    height: 500px;
    width: 100%;
    padding: 1rem;

    // configuración de imágenes
    &-image {
      height: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    &-title {
      width: 100%;
      color: var(--vino);
      font-size: 1rem;
      opacity: 1;
      font-weight: 700;
    }

    .description {
      width: 100%;
      color: var(--vino);
      justify-content: center;
      font-size: 14px;
      opacity: 1;
    }

    &-actions {
      display: flex;
      gap: 1rem;
    }
  }
`

const CardTeam = ({itemList}) => {
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <div className="card">
          <div className="card-title">{item.title}</div>
          <div
            className="card-image"
            style={{backgroundImage: `url('${item.image}')`}}></div>
          <div className="description">
            <p>{item.description}</p>
          </div>
          <div className="card-actions">
            <NavLink to="">
              <Button icon="pi pi-linkedin" className="p-button-rounded" />
            </NavLink>
            <NavLink to="">
              <Button icon="pi pi-github" className="p-button-rounded" />
            </NavLink>
          </div>
        </div>
      )
    })
  }

  return <CardContainer>{renderItems(itemList)}</CardContainer>
}

export {CardTeam}
