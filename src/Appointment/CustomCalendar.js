import React, {useState} from 'react'
import moment from 'moment'
import {useAppointment} from './controller'

// PrimeReact imports
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import {Calendar} from 'primereact/calendar'

const CustomCalendar = ({className, styles}) => {
  const {appointment, setAppointment, getAvailability} = useAppointment()
  const {
    availabilityForMonth,
    date: {iso},
  } = appointment

  const onDateChange = (event) => {
    event.stopPropagation()

    const mDate = moment(event.value)
    const date = {
      iso: event.value,
      year: mDate.year(),
      month: mDate.month() + 1,
      day: mDate.date(),
    }

    setAppointment((currentAppointment) => ({
      ...currentAppointment,
      date,
    }))
  }

  const disabledDates = availabilityForMonth
    .filter((day) => !day.enabled)
    .map((day) => new Date(day.day))

  return (
    <div className={className}>
      <Calendar
        value={iso}
        onChange={onDateChange}
        disabledDates={disabledDates}
        inline
        showWeek
      />
    </div>
  )
}

export {CustomCalendar}
