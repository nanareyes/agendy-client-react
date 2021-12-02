import React, {useState} from 'react'
//import {Button} from 'primereact/button'
import {ToggleButton} from 'primereact/togglebutton'
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
  const [selectedHours, setSelectedHours] = useState(false)

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
        {/* <Button label={string} onClick={() => console.log(key)} /> */}
        <ToggleButton
          checked={selectedHours}
          onChange={(event) => setSelectedHours(event.value)}
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
    <HoursGrid>
      {hourList.length
        ? hourListTemplate(availableHours)
        : 'Horas no disponibles'}
    </HoursGrid>
  )
}

export {AvailableHours}
