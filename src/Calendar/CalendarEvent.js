import React from 'react'
import {Button} from 'primereact/button'
import moment from 'moment'
import {useRecoilState} from 'recoil'
import {userState} from '../atoms'

const CalendarEvent = (props) => {
  const [user] = useRecoilState(userState)

  return (
    <div className="agenda-event">
      <div>
        <div>
          <h5 className="agenda-event-title">{props.serviceName}</h5>
        </div>
        <div>
          <h6>{user.userType === 'Estilista' ? 'Cliente: ' : 'Estilista: '}</h6>
          <h6 className="agenda-event-description">
            {user.userType === 'Estilista'
              ? props.clientName
              : props.stylistName}
          </h6>
        </div>
      </div>
      {/* <p className="agenda-event-title">{props.serviceName}</p> */}
      <div>
        <h5 className="agenda-event-time">
          {moment(props.date).utc().format('hh:mm a')}
        </h5>
      </div>
      {/* <div className="agenda-event-description">
        {user.userType === 'Estilista' ? props.clientName : props.stylistName}
      </div> */}
      <div>
        <Button
          icon="pi pi-bars"
          className="p-button-rounded p-button-outlined"
          tooltip={`Precio: ${props.servicePrice}, Email: ${props.stylistEmail}, Teléfono: ${props.stylistPhone}`}
        />
      </div>
    </div>
  )
}

export {CalendarEvent}
