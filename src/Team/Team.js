import React from 'react'
import {CardTeam} from '../StyledComponents/CardTeam'
import carolina from '../assets/teamsPhoto/carolina.png'
import christian from '../assets/teamsPhoto/christian.jpeg'
import monica from '../assets/teamsPhoto/monica.jpeg'
import natacha from '../assets/teamsPhoto/natacha.jpg'
import sonia from '../assets/teamsPhoto/sonia.png'
import {NavBar} from '../NavBar/NavBar'

const Team = () => {
  const items = [
    {
      title: 'CHRISTIAN ALEXANDER VELASCO NARVÁEZ',
      image: christian,
      description: 'Diseñador gráfico especialista en ...',
    },
    {
      title: 'DIANA CAROLINA REYES MANTILLA',
      image: carolina,
      description: 'Diseñador gráfico especialista en ...',
    },
    {
      title: 'MONICA VIVIANA COLORADO ROMERO',
      image: monica,
      description: 'Diseñador gráfico especialista en ...',
    },
    {
      title: 'SONIA MILENA MOSQUERA',
      image: sonia,
      description: 'Diseñador gráfico especialista en ...',
    },

    {
      title: 'YENNY NATACHA LIBREROS',
      image: natacha,
      description: 'Diseñador gráfico especialista en ...',
    },
  ]

  return (
    <div>
      <NavBar />
      <CardTeam itemList={items} />
    </div>
  )
}

export {Team}
