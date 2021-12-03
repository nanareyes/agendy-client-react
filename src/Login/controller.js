import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {userState, scheduleState} from '../atoms'
import Swal from 'sweetalert2'
import {scheduleObjToArray} from "../utils/schedule"

const useLogin = () => {
  let navigate = useNavigate()
  const [, setUser] = useRecoilState(userState)
  const [, setSchedule] = useRecoilState(scheduleState)

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const loginHandler = (e) => {
    e.preventDefault()

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email: inputEmail,
        password: inputPassword,
      })
      .then(function (response) {
        console.log('login exitoso')
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token,
        })
        if (response.data?.userDB?.userType === 'Estilista') {
          setSchedule(scheduleObjToArray(response.data?.userDB?.workingSchedule))
        }
        navigate('home')
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no registrado')
        Swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Usuario no registrado, confirma nuevamente los datos o crea tu cuenta',
        })
      })
  }

  return {
    setInputEmail,
    setInputPassword,
    loginHandler,
  }
}

export {useLogin}
