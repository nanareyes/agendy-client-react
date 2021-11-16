import React from 'react'
import { SectionTitle } from '../StyledComponents/SectionTitle'
import { CustomCalendar } from './CustomCalendar'
import { SectionWrapper } from '../StyledComponents/SectionWrapper'
import { NavBar } from '../NavBar/NavBar'

//import styled from 'styled-components'

const Appointment = () => {
  const mainLayout = {
    display: 'grid',
  }

  const sectionGroup = {
    display: 'inherit',
    padding: '1rem',
    // gridTemplateColumns: ''
  }

  return (
    <div style={mainLayout}>
      <NavBar />
      <SectionTitle title="AGENDAR CITA" />
      <div style={sectionGroup}>
        <SectionWrapper
          title="Seleccionar Fecha"
          children={<CustomCalendar />}
        />
        <SectionWrapper
          title="Horas disponibles"
          children={<CustomCalendar />}
        />
      </div>
    </div>
  )
}

export { Appointment }
