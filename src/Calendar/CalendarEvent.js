import React from 'react'
import {Button} from 'primereact/button'
import moment from 'moment'

const CalendarEvent = (props) => {
  return (
    <div className="agenda-event">
      <p className="agenda-event-title">{props.serviceName}</p>
      <p className="agenda-event-time">
        {moment(props.date).utc().format('hh:mm a')}
      </p>
      <div className="agenda-event-description">{props.clientName}</div>
      <Button
        icon="pi pi-bars"
        className="p-button-rounded p-button-outlined"
        tooltip="cancelar cita"
      />
    </div>
  )
}

export {CalendarEvent}
