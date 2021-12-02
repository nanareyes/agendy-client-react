import React, {useState, useEffect} from 'react'
import {SectionTitle} from '../StyledComponents/SectionTitle'
import {CustomCalendar} from './CustomCalendar'
import {AvailableHours} from './AvailableHours'
import {Ticket} from './Ticket'
import {SectionWrapper} from '../StyledComponents/SectionWrapper'
import {NavBar} from '../NavBar/NavBar'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'

import {useAppointment} from './controller'
import {once, trigger} from '../utils/events'

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
  const [selectedDate, setSelectedDate] = useState(null)
  const [availableHours, setAvailableHours] = useState([])

  console.log('availableHours', availableHours)

  useEffect(() => {
    console.log('availability', availability)
    setAvailableHours(returnMyHours() || [])
  }, [availability, setAvailableHours])

  const returnMyHours = () => {
    if (Object.values(availability).length) {
      return availability
        .map((item) => {
          if (item.enabled && item.day === selectedDate.day) {
            return item.hours
          }
        })
        .filter((item) => {
          return item
        })
    }
  }

  //Stylist state
  const [selectedStylist, setSelectedStylist] = useState(null)

  const mainLayout = {
    display: 'grid',
  }

  const onStylistChange = (event) => {
    setSelectedStylist(event.value)
  }

  once('emit-date', async (event) => {
    event.stopPropagation()
    const dataDate = event.detail
    if (selectedStylist) {
      getAvailability(
        event,
        selectedStylist._id,
        dataDate.year,
        dataDate.month,
        dataDate.day
      )
      setSelectedDate(dataDate)
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
          children={
            <AvailableHours
              hourList={availableHours.length ? availableHours[0] : []}
            />
          }
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
