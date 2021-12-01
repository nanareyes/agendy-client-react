import React, {useState} from 'react'
import {trigger} from '../utils/events'

// PrimeReact imports
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import {Calendar} from 'primereact/calendar'

const CustomCalendar = ({className, styles}) => {
  const [date, setDate] = useState(null)

  const onDateChange = (event) => {
    const selectedDate = event.value
    console.log(selectedDate)
    const dateData = {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth() + 1,
      day: selectedDate.toISOString().split('T')[0],
    }

    trigger('emit-date', dateData)
    setDate(event.value)
  }

  return (
    <div className={className}>
      <Calendar value={date} onChange={onDateChange} inline showWeek />
    </div>
  )
}

export {CustomCalendar}
