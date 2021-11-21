import React, {useState} from 'react'
//import {Button} from 'primereact/button'
import {ToggleButton} from 'primereact/togglebutton'

const AvailableHours = () => {
  const hourList = [
    {hour: 1637499600, available: true, key: 0},
    {hour: 1637503200, available: true, key: 1},
    {hour: 1637506800, available: false, key: 2},
    {hour: 1637510400, available: true, key: 3},
    {hour: 1637521200, available: false, key: 4},
    {hour: 1637524800, available: true, key: 5},
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

  return (
    <div style={{display: 'grid', gridGap: '1rem'}}>
      {hourListTemplate(availableHours)}
    </div>
  )
}

export {AvailableHours}
