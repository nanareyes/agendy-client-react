import React, {useState} from 'react'
import axios from 'axios'
import {Spinner, Form, FormGroup, Button} from 'reactstrap'
import Swal from 'sweetalert2'
import logo1 from '../assets/logo1.png'

import styled from 'styled-components'

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`

const buttonStyle = {
  display: 'flex',
  justify: 'center',
  align: 'center',
  items: 'center',
  content: 'center',
  width: '390.31px',
  height: '49.16px',
  left: '85px',
  top: '336px',
  background: '#E9478A',
  border: '4px',
}

const formStyle = {
  width: '560px',
  height: '455px',
  left: '469px',
  top: '195px',
  position: 'absolute',
  background: '#FFFFFF',
}

const inputStyle = {
  width: '393px',
  height: '62.57px',
  left: '84px',
  top: '190px',
}

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userEmail = {
      email: e.target.email.value,
    }

    setIsLoading(true)
    await axios
      .post(`https://agendy-api.herokuapp.com/api/forgotPassword`, userEmail)
      .then((res) => {
        setIsLoading(false)
        Swal.fire({
          showConfirmButton: true,
          icon: 'success',
          text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña',
        })
      })
      .catch((err) => {
        setIsLoading(false)
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Ha habido un error al intentar enviar los datos, comprueba el correo introducido o vuelva intentarlo más tarde',
        })
      })
  }

  return (
    <React.Fragment>
      <Form style={formStyle} inline onSubmit={handleSubmit}>
        <StyledImage src={logo1} size="180px" />

        <h4>RECUPERAR CONTRASEÑA</h4>
        <FormGroup floating>
          <input
            type="email"
            name="email"
            style={inputStyle}
            placeholder="Correo electrónico"
            required
          />
        </FormGroup>
        <div className="divButton">
          {isLoading ? (
            <Spinner>Loading...</Spinner>
          ) : (
            <Button style={buttonStyle} className="login" type="submit">
              Enviar
            </Button>
          )}
        </div>
      </Form>
    </React.Fragment>
  )
}

export {ForgotPassword}
