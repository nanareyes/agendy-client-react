import React, {useState} from 'react'
import axios from 'axios'
import {Spinner} from 'reactstrap'
import Swal from 'sweetalert2'

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userEmail = {
      email: e.target.email.value,
    }

    setIsLoading(true)
    await axios
      .post(`https://agendy-api.herokuapp.com/api/forgotpassword`, userEmail)
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
    <div className="main">
      <form className="mainContainer" onSubmit={handleSubmit}>
        <h3>Recuperar cuenta</h3>
        <div>Correo electrónico: </div>
        <input
          type="email"
          name="email"
          placeholder="Introduce tu email"
          required
        />
        <div className="divButton">
          {isLoading ? (
            <Spinner>Loading...</Spinner>
          ) : (
            <button type="submit">Enviar</button>
          )}
          <a href="/resetpassword"> resetear mi contraseña ¡</a>
        </div>
      </form>
    </div>
  )
}

export {ForgotPassword}
