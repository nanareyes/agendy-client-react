import React, { useState } from 'react'

// PrimeReact imports
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { Calendar } from 'primereact/calendar'

const CustomCalendar = ({ className, styles }) => {
  const [date, setDate] = useState(null)

  return (
    <div className={className}>
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
      />
    </div>
  )
}

export { CustomCalendar }
