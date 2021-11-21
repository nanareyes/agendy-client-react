import React from 'react'
import styled from 'styled-components'
import {Button} from 'primereact/button'

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

const Ticket = ({service, name, date, hour}) => {
  return (
    <TicketCard>
      <header className="ticket-header">
        <h3>
          {service}{' '}
          <Button
            tooltip="Editar servicio"
            icon="pi pi-pencil"
            className="p-button-rounded p-button-outlined"
          />
        </h3>
        <p>
          <strong>para:</strong> {name}{' '}
        </p>
      </header>
      <section className="ticket-section">
        <h2>Fecha</h2>
        <p>{date}</p>
      </section>
      <section className="ticket-section">
        <h2>Hour</h2>
        <p>{hour}</p>
      </section>
    </TicketCard>
  )
}

export {Ticket}
