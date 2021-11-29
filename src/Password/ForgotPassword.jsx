import React, { useState } from 'react'
import axios from 'axios'
import { Spinner, Form, FormGroup, Button } from 'reactstrap'
import Swal from 'sweetalert2'



const buttonStyle = {
  width: '100%',
  backgroundColor: 'var(--fucsia)',
  color: 'var(--white)',
  fontFamily: 'Ubuntu',
  border: 'none',
}

const formStyle = {
  width: '50%',
  minWidth: '280px',
  display: 'grid',
  alignItems: 'center',
}
const inputStyle = {
  width: '470px',
  height: '62.57px',
  left: '84px',
  top: '190px',
  border: '2px solid var(--vino)',
  color: 'var(--vino)',
  padding: '0.8rem .75rem',

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
          text: 'Revise su email, se ha enviado un enlace para crear una nueva contraseña',
        })
      })
      .catch((err) => {
        setIsLoading(false)
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Ha ocurrido un error al enviar los datos, comprueba el correo o vuelve intentarlo más tarde',
        })
      })
  }

  return (
    <React.Fragment>
      <Form style={formStyle} inline onSubmit={handleSubmit}>
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

export { ForgotPassword }
