import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import {NavBar} from '../NavBar/NavBar'
import {SectionTitle} from '../StyledComponents/SectionTitle'
import {Calendar as PRCalendar} from 'primereact/calendar'
import {OverlayPanel} from 'primereact/overlaypanel'
import {Button} from 'primereact/button'
import {Message} from 'primereact/message'
import moment from 'moment'
import {useRecoilState} from 'recoil'
import 'moment/locale/es'
import axios from 'axios'
import {userState} from '../atoms'
import {CalendarEvent} from './CalendarEvent'

const CalendarContainer = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  .agenda-frame {
    width: min(50vh, 600px);
    min-height: 500px;
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

const Calendar = () => {
  moment.locale('es')
  const actualDate = new Date()
  const [date, setDate] = useState(actualDate)
  const [events, setEvents] = useState([])
  const [user] = useRecoilState(userState)

  const onDateChange = (event) => {
    const selectedDate = new Date(event.value)
    setDate(selectedDate)
    overlayPanelReference.current.hide()
  }

  const overlayPanelReference = useRef(null)

  const onCalendarOpen = (event) => {
    overlayPanelReference.current.toggle(event)
  }

  let dayName = moment(date).format('MMMM D')
  dayName = dayName[0].toUpperCase() + dayName.substring(1)

  useEffect(() => {
    const stylistId = user._id
    const startDate = moment(date).format('YYYYMMDD')
    const endDate = moment(date).format('YYYYMMDD')
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/appointment?stylistId=${stylistId}&startDate=${startDate}&endDate=${endDate}`
      )
      .then(function (response) {
        console.log('appointment response', response.data)
        setEvents(response.data)
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Error consultando citas')
      })
  }, [date])

  return (
    <div>
      <NavBar />
      <SectionTitle title="AGENDA DE USUARIO" />
      <CalendarContainer>
        <div className="agenda-frame">
          <header className="agenda-header">
            <p className="agenda-day"> {dayName} </p>
            <Button
              icon="pi pi-calendar"
              className="p-button-rounded"
              onClick={onCalendarOpen}
            />
            <OverlayPanel
              ref={overlayPanelReference}
              showCloseIcon
              id="overlay_panel">
              <PRCalendar value={date} onChange={onDateChange} inline />
            </OverlayPanel>
          </header>
          <section className="agenda-event-grid">
            {events.length > 0 &&
              events.map((event) => <CalendarEvent {...event} />)}
            {events.length === 0 && (
              <Message
                severity="info"
                text="No tiene citas para esta fecha"></Message>
            )}
          </section>
        </div>
      </CalendarContainer>
    </div>
  )
}
export {Calendar}
