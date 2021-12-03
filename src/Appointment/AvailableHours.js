import React, {useState, useEffect} from 'react'
import {ProgressSpinner} from 'primereact/progressspinner'
//import {Button} from 'primereact/button'
import {ToggleButton} from 'primereact/togglebutton'
import {on, trigger} from '../utils/events'
import styled from 'styled-components'

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

const AvailableHours = ({hourList}) => {
  const [selectedHours, setSelectedHours] = useState([])
  const [isLoading, setLoading] = useState(false)

  on('emit-date', () => {
    setLoading(true)
  })

  useEffect(() => {
    if (hourList.length > 0) {
      hourList.forEach((obj) => (obj.isSelected = false))
      const initialState = hourList.map((obj) => obj.isSelected)
      setSelectedHours(initialState)
    }
  }, [hourList])

  useEffect(() => {
    if (selectedHours.length) {
      setLoading(false)
    }
  }, [isLoading, selectedHours])

  const handleSelectedHour = (event) => {
    const id = event.target.id
    const newArr = [...selectedHours]
    newArr[id] = !newArr[id]
    setSelectedHours(newArr)
    console.log(hourList[id].hour)
    trigger('hour-selected', {selectedHour: hourList[id].hour})
  }

  const returnAvailableHours = (hourList) => {
    const available = hourList.filter((hour) => hour.available === true)

    const hours = available.map((item) => {
      return `${item.hour}:00`
    })

    return hours
  }

  const hourListTemplate = (hourStringList) => {
    return hourStringList.map((string, key) => (
      <div key={key}>
        <ToggleButton
          id={key}
          checked={selectedHours[key]}
          onChange={handleSelectedHour}
          onLabel={string}
          offLabel={string}
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          style={{width: '10em'}}
        />
      </div>
    ))
  }

  const availableHours = returnAvailableHours(hourList)

  return (
    <HoursGrid className="hours-grid">
      {isLoading ? <ProgressSpinner /> : hourListTemplate(availableHours)}
    </HoursGrid>
  )
}

export {AvailableHours}
