import React from 'react'
import {Calendar} from '@progress/kendo-react-dateinputs'
import {useState} from 'react'

const PickDate = (props) => {
  const [date, setDate] = useState(null)

  return (
    <div>
      <div>Date of birth</div>

      <Calendar value={date} onChange={(e) => setDate(e.value)} />
      <div>Selected date: {date?.toDateString()}</div>
    </div>
  )
}

export default PickDate
