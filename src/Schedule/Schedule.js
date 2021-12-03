import React from 'react'
import styled from 'styled-components'
import {NavBar} from '../NavBar/NavBar'
import {ScheduleDays} from './ScheduleDays'
import {SectionTitle} from '../StyledComponents/SectionTitle'

const ScheduleContainer = styled.div`
  width: 80%;
  margin: 10px auto;
`

const Schedule = () => {
  return (
    <div>
      <NavBar />
      <SectionTitle title="MI HORARIO" />
      <ScheduleContainer>
        <ScheduleDays />
      </ScheduleContainer>
    </div>
  )
}

export {Schedule}
