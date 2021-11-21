import React from 'react'
import {SectionTitle} from '../StyledComponents/SectionTitle'
import {CustomCalendar} from './CustomCalendar'
import {AvailableHours} from './AvailableHours'
import {Ticket} from './Ticket'
import {SectionWrapper} from '../StyledComponents/SectionWrapper'
import {NavBar} from '../NavBar/NavBar'
import {Button} from 'primereact/button'

//import styled from 'styled-components'

const Appointment = () => {
  const mainLayout = {
    display: 'grid',
  }

  const sectionGroup = {
    display: 'inherit',
    gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))',
    gap: '1rem',
    padding: '1rem',
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
          children={<AvailableHours />}
        />
        <SectionWrapper
          title="Mi Ticket"
          children={
            <Ticket
              service="UÑAS ACRILICAS"
              name="ARIS LOVE"
              date={190002193}
              hour={1203199003}
            />
          }
        />
        <SectionWrapper
          children={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
              }}>
              <Button label="Guardar" /> <Button label="Cancelar" />
            </div>
          }
        />
      </div>
    </div>
  )
}

export {Appointment}
