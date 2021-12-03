import React from 'react'
import styled from 'styled-components'
import {Button} from 'primereact/button'
import moment from 'moment'
import {useAppointment} from './controller'

const TicketCard = styled.div`
  background: white;
  width: 100%;
  padding: 1rem;

  .ticket-header {
    h3 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`
moment.locale('es')
const Ticket = () => {
  const {getAppointmentData} = useAppointment()
  const appointmentData = getAppointmentData()

  return (
    <TicketCard>
      <header className="ticket-header">
        <h3>
          {appointmentData?.serviceName}{' '}
          {/* <Button
            tooltip="Editar servicio"
            icon="pi pi-pencil"
            className="p-button-rounded p-button-outlined"
          /> */}
        </h3>
        <p>
          <strong>para:</strong> {appointmentData?.clientName}{' '}
        </p>
        <p>
          <strong>de:</strong> {appointmentData?.stylistName}{' '}
        </p>
      </header>
      <section className="ticket-section">
        <h2>Fecha</h2>
        <p>
          {appointmentData?.date
            ? moment(appointmentData?.date).utc().format('MMMM D YYYY')
            : ''}
        </p>
      </section>
      <section className="ticket-section">
        <h2>Hora</h2>
        <p>
          {appointmentData?.date
            ? moment(appointmentData?.date).utc().format('hh:mm a')
            : ''}
        </p>
      </section>
    </TicketCard>
  )
}

export {Ticket}
