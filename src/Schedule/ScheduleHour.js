import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {useRecoilState} from 'recoil'
import {scheduleState} from '../atoms'

const ScheduleHour = (props) => {
  const [schedule, setSchedule] = useRecoilState(scheduleState)
  const {day, hour} = props

  // Esta funcion verifica si la hora se encuentra ya seleccionada
  // en el schedule para inicializar asi el state de selected
  const isSelectedHour = () => {
    const scheduleDay = schedule[day]
    if (scheduleDay) {
      console.info('scheduleDay en isSelectedHour', scheduleDay)
      const index = scheduleDay.findIndex((timeLapse) => {
        return timeLapse.startHour <= hour && timeLapse.endHour > hour
      })
      return index > 0
    }
    return false
  }

  const [selected, setSelected] = useState(isSelectedHour())

  const handleHourSelect = () => {
    setSelected(!selected)
  }

  useEffect(() => {
    // Actualiza el schedule state con la hora que se ha
    // seleccionado o deseleccionado
    setSchedule((currentSchedule) => {
      const newSchedule = {...currentSchedule}
      //1. Verifica si el dia no está creado en el state
      if (!currentSchedule[day]) {
        // Si se seleccionó una hora, se crea el array del día
        if (selected) {
          newSchedule[day] = [
            {
              startHour: hour,
              endHour: hour + 1,
            },
          ]
        }
      } else {
        // Si se seleccionó una hora, se actualiza el array del día
        if (selected) {
          // Se busca en cuál posición del array existente se debe incluir
          // la nueva hora
          const index = currentSchedule[day].findIndex((timeLapse) => {
            return (
              timeLapse.endHour === hour || timeLapse.startHour === hour + 1
            )
          })
          if (index >= 0) {
            const newTimeLapse = {...currentSchedule[day][index]}
            // console.info('newTimeLapse', newTimeLapse)
            if (newTimeLapse.endHour === hour) {
              newTimeLapse.endHour = hour + 1
            } else {
              newTimeLapse.startHour = hour
            }
            newSchedule[day] = [
              ...newSchedule[day].slice(0, index),
              newTimeLapse,
              ...newSchedule[day].slice(index + 1),
            ]
          } else {
            // Se seleccionó una hora que no se puede incluir en los
            // lapsos de hora existentes, se debe crear uno nuevo
            const startHour = currentSchedule[day][0].startHour
            // const numItems = currentSchedule[day].length
            // const endHour = currentSchedule[day][numItems - 1].endHour
            if (hour < startHour) {
              newSchedule[day] = [
                {
                  startHour: hour,
                  endHour: hour + 1,
                },
                ...newSchedule[day],
              ]
            } else {
              newSchedule[day] = [
                ...newSchedule[day],
                {
                  startHour: hour,
                  endHour: hour + 1,
                },
              ]
            }
          }
        }
      }
      // console.info('newSchedule', newSchedule)
      return newSchedule
    })
  }, [selected])

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
