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
    display: flex;
    justify-content: flex-end;
    border-radius: 43px;
    border: 2px solid var(--lila);
    box-shadow: 0px 1px 4px 2px #00000021;
    opacity: 0.8;

    // configuración de imágenes
    height: 400px;
    width: 100%;
    background-origin: content-box;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 2.5rem;

    &-title {
      width: 100%;
      color: var(--vino);
      font-size: 1rem;
      opacity: 1;
    }

    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
`

const CardGrid = ({itemList}) => {
  const renderItems = (items) => {
    return items.map((item, key) => {
      return (
        <NavLink key={key} className="nav-link" to={item.path}>
          <div className="card" style={{backgroundImage: `url(${item.image})`}}>
            <div className="card-title">
              <h1>{item.title}</h1>
            </div>
          </div>
        </NavLink>
      )
    })
  }

  return <CardContainer>{renderItems(itemList)}</CardContainer>
}

export {CardGrid}
