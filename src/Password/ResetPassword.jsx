import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
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

const ResetPassword = (props) => {
  let { id } = useParams()
  let { token } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userPassword = {
      password: e.target.password.value,
    }

    setIsLoading(true)
    await axios
      .post(
        `https://agendy-api.herokuapp.com/api/resetPassword`,
        userPassword,
        {
          params: {
            id: id,
            token: token,
          },
        }
      )
      .then((res) => {
        setIsLoading(false)
        Swal.fire({
          showConfirmButton: true,
          icon: 'success',
          text: 'Contraseña cambiada correctamente',
        })
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Ha habido un error al intentar enviar los datos, vuelva a intentarlo más tarde',
        })
      })
  }

  const checkValidation = (e) => {
    const confirmPass = e.target.value
    setConfirmPassword(confirmPass)
    if (password !== confirmPass) {
      setIsError('La contraseña no coincide')
    } else {
      setIsError('')
    }
  }

  const switchShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <React.Fragment>
      <Form style={formStyle} inline onSubmit={handleSubmit}>
        <h4>CREAR NUEVA CONTRASEÑA</h4>
        <FormGroup floating>
          <input
            type={showPassword ? 'text' : 'password'}
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Nueva contraseña"
            required
          />
        </FormGroup>

        <button onClick={switchShowPassword}>
          {showPassword ? 'Ocultar' : 'Mostrar'}{' '}
        </button>
        <FormGroup floating>
          <input
            type="password"
            value={confirmPassword}
            style={inputStyle}
            onChange={(e) => checkValidation(e)}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            required
          />
        </FormGroup>

        <div className="confirmPassword">{isError}</div>
        <div className="divButton">
          {isLoading ? (
            <Spinner>Cargando...</Spinner>
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

export { ResetPassword }
