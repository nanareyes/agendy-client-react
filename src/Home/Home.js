import React from 'react'
import {CardGrid} from '../StyledComponents/CardGrid'
import agenda from '../assets/imagesHome/agenda.jpg'
import manosypies from '../assets/imagesHome/manosypies.jpg'
import {NavBar} from '../NavBar/NavBar'

const Home = () => {
  const items = [
    {title: 'MANOS Y PIES', image: manosypies, path: '/services'},
    {title: 'GALERÍA', image: manosypies, path: '/gallery'},
    {title: 'AGENDA', image: agenda, path: '/agenda'},
  ]

  return (
    <div>
      <NavBar />
      <CardGrid itemList={items} />
    </div>
  )
}

export {Home}
