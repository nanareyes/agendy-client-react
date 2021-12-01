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

const AvailableHours = () => {
  const hourList = [
    {hour: 1637499600, available: true},
    {hour: 1637503200, available: false},
    {hour: 1637506800, available: true},
    {hour: 1637510400, available: false},
    {hour: 1637521200, available: true},
    {hour: 1637524800, available: false},
  ]

  const [selectedHours, setSelectedHours] = useState(false)

  const returnAvailableHours = (hourList) => {
    const available = hourList.filter((hour) => hour.available === true)

    const hours = available.map((hour) => {
      let date = new Date(hour.hour * 1000).toLocaleTimeString()
      return date.replace(':00', '')
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

  return <HoursGrid>{hourListTemplate(availableHours)}</HoursGrid>
}

export {AvailableHours}
