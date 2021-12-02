import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Button, Spinner} from 'reactstrap'
import {useRecoilState} from 'recoil'
import {scheduleState, userState, loadingState} from '../atoms'

import {ScheduleDay} from './ScheduleDay'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 5px;
`

const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 0.5rem;
  border-radius: 30px;
  border: 2px solid var(--vino);
  box-shadow: 0px 1px 4px 2px #00000021;
  align-items: center;
  height: auto;
  padding: 1rem;

  margin: 0 auto;
  .card {
    gap: 0.5rem;
    padding: 1rem;
    min-width: 160px;
  }

  .title {
    width: 100%;
    color: var(--vino);
    font-size: 1.7rem;
    opacity: 1;
    text-align: center;
  }
  .hours {
    min-width: 40px;
    min-height: 40px;
    border-radius: 8px;
    background: white;
    gap: 0.5rem;
    border: 2px solid var(--fucsia);
    color: var(--vino);
    flex-direction: column;
    margin-top: 5px;
    text-align: center;
    align-items: center;
    line-height: 3em;

    &:hover {
      background: var(--fucsia);
      color: var(--white);
      border: 2px solid var(--fucsia);
      font-weight: bold;
    }

    &-selected {
      background: var(--fucsia);
      color: var(--white);
      border: 2px solid var(--fucsia);
      font-weight: bold;
    }
  }
`
const buttonStyle = {
  width: '20%',
  backgroundColor: 'var(--fucsia)',
  color: 'var(--white)',
  fontFamily: 'Ubuntu',
  border: 'none',
}

const ScheduleDays = () => {
  const [schedule, setSchedule] = useRecoilState(scheduleState)
  const [user, setUser] = useRecoilState(userState)
  const [loading, setLoading] = useRecoilState(loadingState)

  console.log('user en scheduleDays', user)
  console.log('schedule scheduleDays', schedule)

  const handleSaveSchedule = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/user/${user._id}`, {
        workingSchedule: schedule,
      })
      .then(function (response) {
        setUser((currentUser) => {
          const newUser = {
            ...currentUser,
            ...response.data,
          }
          return newUser
        })
        Swal.fire({
          showConfirmButton: true,
          icon: 'success',
          text: 'Se ha guardado correctamente su horario',
        })
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Estilista no actualizado')
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Ha ocurrido un error al guardar su horario, por favor inténtelo nuevamente',
        })
      })
      .finally(function () {
        setLoading(false)
      })
  }

  const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ]

  console.info('schedule', schedule)
  return (
    <div>
      {loading && <Spinner color="primary" />}
      {!loading && (
        <>
          <ButtonContainer>
            <Button style={buttonStyle} onClick={handleSaveSchedule}>
              Guardar
            </Button>
          </ButtonContainer>
          <CardContainer>
            {days.map((day, index) => (
              <ScheduleDay dayName={day} dayNumber={index + 1} />
            ))}
          </CardContainer>
        </>
      )}
    </div>
  )
}

export {ScheduleDays}
