import React from 'react'
import {ScheduleHour} from './ScheduleHour'

const ScheduleDay = (props) => {
  const hoursItems = []
  for (let i = 6; i < 21; i++) {
    hoursItems.push(<ScheduleHour day={props.dayNumber} hour={i} />)
  }
  return (
    <div className="card">
      <div className="title"> {props.dayName} </div>
      {hoursItems}
    </div>
  )
}

export {ScheduleDay}
