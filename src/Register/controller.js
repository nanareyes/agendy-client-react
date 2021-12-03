import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useRecoilState} from 'recoil'
import {userState} from '../atoms'
import Swal from 'sweetalert2'

const useRegister = () => {
  let navigate = useNavigate()
  const [, setUser] = useRecoilState(userState)

  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputPassword2, setInputPassword2] = useState('')
  const [inputUserType, setInputUserType] = useState('')

  const onRegister = (e) => {
    e.preventDefault()
    // console.log('aquí funciona el boton',inputNombres, inputEmail,inputPassword, inputPassword2)

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/new-user`, {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        password2: inputPassword2,
        userType: inputUserType,
        loginType: 'AGENDY',
      })
      .then(function (response) {
        console.log('Registro exitoso')
        Swal.fire({
          showConfirmButton: true,
          icon: 'success',
          text: 'Registro exitoso.¡Completa tu perfil y Bienvenido a Agendy Nails!',
        })
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token,
        })
        navigate('/home')
      })
      .catch(function (error) {
        // console.log(error);
        console.log(error, 'Usuario no registrado')
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Ha ocurrido un error, valida los datos e inténtalo nuevamente',
        })
      })
  }

  return {
    inputUserType,
    setInputName,
    setInputEmail,
    setInputPassword,
    setInputPassword2,
    setInputUserType,
    onRegister,
  }
}

export {useRegister}
