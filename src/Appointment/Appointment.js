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

import styled from 'styled-components'
import moment from 'moment'

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
  const {appointment, setAppointment, saveAppointment, cancelAppointment} =
    useAppointment()

  const mainLayout = {
    display: 'grid',
  }

  const onStylistChange = (event) => {
    setAppointment((currentAppointment) => ({
      ...currentAppointment,
      stylist: event.value,
    }))
  }

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
                    panelClassName="dropdown-stylists"
                    value={appointment?.stylist}
                    options={appointment?.stylists}
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
        <SectionWrapper title="Mi Ticket" children={<Ticket />} />
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
                onClick={saveAppointment}
              />{' '}
              <Button
                label="Cancelar"
                icon="pi pi-times"
                className="cancel-button"
                onClick={cancelAppointment}
              />
            </div>
          }
        />
      </SectionGroup>
    </div>
  )
}

export {Appointment}
