import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {useRecoilState} from 'recoil'
import {scheduleState} from '../atoms'

const ScheduleHour = (props) => {
  const [schedule, setSchedule] = useRecoilState(scheduleState)
  const {day, hour} = props

  const [selected, setSelected] = useState(schedule[day][hour].selected)

  const handleHourSelect = () => {
    // Actualiza el schedule state con la hora que se ha
    // seleccionado o deseleccionado
    setSchedule((currentSchedule) => {
      const newSchedule = {...currentSchedule}
      newSchedule[day] = [...newSchedule[day].slice(0, hour), {hour, selected: !newSchedule[day][hour].selected }, ...newSchedule[day].slice(hour + 1)]

      return newSchedule
    })
    setSelected(!selected)
  }

  const mHour = moment().hour(hour).minute(0)
  const mNextHour = moment()
    .hour(hour + 1)
    .minute(0)

  return (
    <div
      className={`hours ${selected ? 'hours-selected' : ''}`}
      onClick={handleHourSelect}>
      {`${mHour.format('hh a')} - ${mNextHour.format('hh a')}`}
    </div>
  )
}

export {ScheduleHour}
