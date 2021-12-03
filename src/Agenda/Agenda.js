import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import {NavBar} from '../NavBar/NavBar'
import {SectionTitle} from '../StyledComponents/SectionTitle'
import {Calendar} from 'primereact/calendar'
import {OverlayPanel} from 'primereact/overlaypanel'
import {Button} from 'primereact/button'
import {FakeAppointments} from './FakeAppointments'
import {getDateString} from './dateUtils'
//import {Dropdown} from 'primereact/dropdown'

const AgendaContainer = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  .agenda-frame {
    width: min(50vh, 600px);
    height: 500px;
    background-color: white;
    box-shadow: 1.272580623626709px 1.272580623626709px 11.453226089477539px 0px
      rgba(0, 0, 0, 0.15);
    .agenda-header {
      display: flex;
      place-items: center;
      gap: 1rem;
      padding: 1rem;
      height: 80px;
      width: 100%;
      border-bottom: 2px solid #ffcdee;
      color: var(--vino);
      font-weight: 700;

      .p-button {
        background: violet;
        border: none;
        &:hover {
          background: #ad5dad;
        }
      }
    }

    .agenda-day {
      all: unset;
    }

    .agenda-event-grid {
      display: grid;
      padding: 1rem;
      gap: 1rem;
      .agenda-event {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 0.5rem;
        height: 100px;
        width: 100%;
        background: #ffcdee;
        padding: 0.5rem;
        border-left: 3px solid var(--fucsia);
        border-radius: 0 5px 5px 0;
        color: var(--vino);

        &-title {
          all: unset;
          font-weight: 700;
        }
        &-time {
          all: unset;
        }

        .p-button {
          transform: scale(0.6);
          color: var(--fucsia);
        }
      }
    }
  }
`

const Agenda = () => {
  const actualDate = new Date()
  const [date, setDate] = useState(actualDate)

  const actualDateHeader = getDateString(actualDate)
  const [dateHeader, setDateHeader] = useState(actualDateHeader)

  const onDateChange = (event) => {
    const timestamp = event.target.value.getTime()
    const selectedDate = new Date(timestamp)

    setDateHeader(getDateString(selectedDate))
    setDate(selectedDate)
    overlayPanelReference.current.hide()
  }

  const overlayPanelReference = useRef(null)

  const onCalendarOpen = (event) => {
    overlayPanelReference.current.toggle(event)
  }

  // Match date study
  FakeAppointments.forEach((item) => {
    const myDate = new Date(Number(item.date * 1000))

    if (getDateString(date) == getDateString(myDate)) {
      console.log('servicio: ', item.service)
      let myHour = myDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      myHour = myHour.split('. ').join('').split('.')[0]

      console.log('hora: ', `${myHour.toUpperCase()}`)
    }
  })

  return (
    <div>
      <NavBar />
      <SectionTitle title="AGENDA DE USUARIO" />
      <AgendaContainer>
        <div className="agenda-frame">
          <header className="agenda-header">
            <p className="agenda-day"> {dateHeader} </p>
            <Button
              icon="pi pi-calendar"
              className="p-button-rounded"
              onClick={onCalendarOpen}
            />
            <OverlayPanel
              ref={overlayPanelReference}
              showCloseIcon
              id="overlay_panel">
              <Calendar value={date} onChange={onDateChange} inline />
            </OverlayPanel>
          </header>

          <section className="agenda-event-grid">
            <div className="agenda-event">
              <p className="agenda-event-title">MAQUILLAJE SEMIPERMANENTE</p>
              <p className="agenda-event-time">2:00 PM</p>
              <Button
                icon="pi pi-times"
                className="p-button-rounded p-button-outlined"
                tooltip="cancelar cita"
              />
            </div>
          </section>
        </div>
      </AgendaContainer>
    </div>
  )
}
export {Agenda}
