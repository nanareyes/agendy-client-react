import React from 'react'
import styled from 'styled-components'
import {NavBar} from '../NavBar/NavBar'
import {ScheduleDays} from './ScheduleDays'

const ScheduleContainer = styled.div`
  width: 80%;
  margin: 10px auto;
`

const Schedule = () => {
  return (
    <div>
      <NavBar />
      <h2>MI HORARIO </h2>
      <ScheduleContainer>
        <ScheduleDays />
      </ScheduleContainer>
    </div>
  )
}

export {Schedule}
