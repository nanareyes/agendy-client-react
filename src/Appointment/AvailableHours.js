import React, {useState, useEffect} from 'react'
import {ProgressSpinner} from 'primereact/progressspinner'
import {ToggleButton} from 'primereact/togglebutton'
import {useRecoilState} from 'recoil'
import styled from 'styled-components'
import {loadingState} from '../atoms'
import {useAppointment} from './controller'
import moment from 'moment'

// Styles
const HoursGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));

  .p-togglebutton {
    width: 100% !important;
  }
`

const AvailableHours = () => {
  const {appointment, setAppointment} = useAppointment()
  const [isLoading] = useRecoilState(loadingState)
  const {selectedHour} = appointment

  const handleSelectedHour = (hour) => {
    setAppointment((currentAppointment) => ({
      ...currentAppointment,
      selectedHour: hour,
    }))
  }

  const {availability} = appointment
  const availableHours = (availability?.hours || [])
    .filter((hour) => hour.available)
    .map((hour) => hour.hour)

  const mDate = moment()
  const hourList = availableHours.map((hour) => {
    mDate.set({hour, minutes: 0, seconds: 0})
    return (
      <div key={hour}>
        <ToggleButton
          checked={hour === selectedHour}
          onChange={(e) => {
            e.preventDefault()
            handleSelectedHour(hour)
          }}
          onLabel={mDate.format('hh:mm a')}
          offLabel={mDate.format('hh:mm a')}
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          style={{width: '10em'}}
        />
      </div>
    )
  })

  return (
    <HoursGrid className="hours-grid">
      {isLoading && <ProgressSpinner />}
      {!isLoading && hourList}
    </HoursGrid>
  )
}

export {AvailableHours}
