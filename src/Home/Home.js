import React from 'react'
import {CardGrid} from '../StyledComponents/CardGrid'
import calendar from '../assets/imagesHome/calendar.png'
import manosypies from '../assets/imagesHome/manosypies.png'
import gallery from '../assets/imagesHome/gallery.png'
import {NavBar} from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Home = () => {
  const items = [
    {title: 'MANOS Y PIES', image: manosypies, path: '/services'},
    {title: 'GALERÍA', image: gallery, path: '/gallery'},
    {title: 'AGENDA', image: calendar, path: '/appointment'},
  ]

  return (
    <div>
      <NavBar />
      <CardGrid itemList={items} />
      <Footer />
    </div>
  )
}

export {Home}
