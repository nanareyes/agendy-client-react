import React from 'react'
import { SectionTitle } from '../StyledComponents/SectionTitle'
import { TaggedTitle } from '../StyledComponents/TaggedTitle'
// import styled from 'styled-components'

const Appointment = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <SectionTitle title="AGENDAR CITA" />
      <TaggedTitle title="Seleccionar Fecha" />
    </div>
  )
}

export { Appointment }
