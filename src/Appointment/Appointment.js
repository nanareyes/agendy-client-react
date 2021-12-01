import React, {useState} from 'react'
import {SectionTitle} from '../StyledComponents/SectionTitle'
import {CustomCalendar} from './CustomCalendar'
import {AvailableHours} from './AvailableHours'
import {Ticket} from './Ticket'
import {SectionWrapper} from '../StyledComponents/SectionWrapper'
import {NavBar} from '../NavBar/NavBar'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'

import {useAppointment} from './controller'
import {once} from '../utils/events'

import styled from 'styled-components'

const SectionGroup = styled.div`
  display: inherit;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  gap: 1rem;
  padding: 1rem;

  .save-button,
  .cancel-button {
    width: 80%;
  }

  .save-button {
    border: none;
    background: var(--fucsia);
  }
  .cancel-button {
    background: white;
    border: 2px solid var(--fucsia);
    color: var(--vino);

    &:hover {
      background: white;
      color: var(--vino);
      border: 2px solid red;
    }
  }
`

const Appointment = () => {
  // controller
  const {stylists, getAvailability, availability} = useAppointment()

  const [test, setTest] = useState(null)

  if (Object.values(availability).length) {
    console.log(availability.days[0].day === test.day)
  }

  //States
  const [selectedStylist, setSelectedStylist] = useState(null)

  const mainLayout = {
    display: 'grid',
  }

  const onStylistChange = (event) => {
    setSelectedStylist(event.value)
  }

  once('emit-date', async (event) => {
    const dataDate = event.detail
    if (selectedStylist) {
      getAvailability(event, selectedStylist._id, dataDate.year, dataDate.month)
      setTest(dataDate)
      event.stopImmediatePropagation()
    }
  })

  return (
    <div style={mainLayout}>
      <NavBar />
      <SectionTitle title="AGENDAR CITA" />
      <SectionGroup>
        <SectionWrapper
          children={
            <>
              <SectionWrapper
                title="Seleccionar estilista"
                children={
                  <Dropdown
                    value={selectedStylist}
                    options={stylists}
                    onChange={onStylistChange}
                    optionLabel="name"
                    placeholder="Seleccionar un estilista"
                  />
                }
              />
              <SectionWrapper
                title="Seleccionar Fecha"
                children={<CustomCalendar />}
              />
            </>
          }
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
                display: 'grid',
                gap: '1rem',
                padding: '1rem',
                placeItems: 'center',
              }}>
              <Button
                label="Guardar"
                icon="pi pi-save"
                className="save-button"
              />{' '}
              <Button
                label="Cancelar"
                icon="pi pi-times"
                className="cancel-button"
              />
            </div>
          }
        />
      </SectionGroup>
    </div>
  )
}

export {Appointment}
