import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {Spinner, Form, FormGroup, Button, CardImg} from 'reactstrap'
import Swal from 'sweetalert2'
import logo from '../assets/logo1.png'

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

const ResetPassword = (props) => {
  let {id} = useParams()
  let {token} = useParams()
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
      .put(
        `https://agendy-api.herokuapp.com/api/resetpassword/` +
          id +
          '/' +
          token,
        userPassword,
        {
          where: {
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
        navigate.push('/login')
      })
      .catch((err) => {
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
        <CardImg
          src={logo}
          top="40px"
          width="206px"
          height="70.63px"
          left="178px"
        />
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

export {ResetPassword}
