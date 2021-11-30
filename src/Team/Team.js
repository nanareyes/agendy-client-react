import React from 'react'
import {CardTeam} from '../StyledComponents/CardTeam'
import carolina from '../assets/teamsPhoto/carolina.png'
import christian from '../assets/teamsPhoto/christian.jpeg'
import monica from '../assets/teamsPhoto/monica.jpeg'
import natacha from '../assets/teamsPhoto/natacha.jpg'
import sonia from '../assets/teamsPhoto/sonia.png'
import {NavBar} from '../NavBar/NavBar'
import {Footer} from '../Footer/Footer'

const Team = () => {
  const items = [
    {
      title: 'CHRISTIAN ALEXANDER VELASCO NARVÁEZ',
      image: christian,
      description:
        'Desarrollador front-end especializado en diseño de interfaces y experiencias de usuario',
      github: 'https://github.com/subcorporeal',
      linkedin: '',
    },
    {
      title: 'DIANA CAROLINA REYES MANTILLA',
      image: carolina,
      description:
        'Adminstradora de empresas, especialista en Mercadeo y Educación, cultura y política de la UNAD',
      github: 'https://github.com/nanareyes',
      linkedin: 'https://www.linkedin.com/in/diana-carolina-r-21bba466/',
    },
    {
      title: 'MONICA VIVIANA COLORADO ROMERO',
      image: monica,
      description:
        'Auxiliar de enfermería, con conocimientos en procesos administrativos y de atención al usuario, manejo de herramientas ofimáticas y CRM institucionales, bases de datos y gestión documental.',
      github: 'https://github.com/monicavcr07/',
      linkedin: 'https://www.linkedin.com/in/monica-colorado-6a639a13a/',
    },
    {
      title: 'SONIA MILENA MOSQUERA',
      image: sonia,
      description:
        'Ingeniera de Telelcomunicaciones. Coordinadora de Certificación RETIE Colombia 2020. Voluntariado de la Cruz Roja España. Monitora de Nuevas Tecnologias para Adultos Mayores Actual',
      github: 'https://github.com/SONIAMILENA',
      linkedin: 'https://www.linkedin.com/in/sonia-mosquera-59bb9360/',
    },

    {
      title: 'YENNY NATACHA LIBREROS',
      image: natacha,
      description: 'Diseñador gráfico especialista en ...',
      github: 'https://github.com/Natacha7',
      linkedin: '',
    },
  ]

  return (
    <div>
      <NavBar />
      <CardTeam itemList={items} />
      <Footer />
    </div>
  )
}

export {Team}
