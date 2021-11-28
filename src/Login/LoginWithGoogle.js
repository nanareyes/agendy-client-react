import React from 'react'
import GoogleLogin from 'react-google-login'
import {useNavigate} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {userState} from '../atoms'
import axios from 'axios'
import styled from 'styled-components'

const CustomGoogle = styled.button`
  width: 100%;
  border: 2px solid var(--vino);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  padding: 0.4rem 3rem;
  border-radius: 4px;
  font-family: 'Ubuntu';
  background: white;
`
// El componente detecta si se trata de un login o registro
// con la propiedad isSignUp. Por defecto es false, indicando
// que es solo un login
function LoginWithGoogle({isSignUp = false}) {
  // No se utiliza el estado local del componente sino
  // el estado de recoil. Asi es posible reusarlo en
  // otros componentes, como NavBar
  const [user, setUser] = useRecoilState(userState)
  console.log(user)
  const navigate = useNavigate()

  const onGoogleLogin = (response) => {
    // console.log(response)
    // console.log(response.profileObj)

    // ACtualiza los datos del usuario en el state
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        name: response.profileObj.name,
        email: response.profileObj.email,
        loginType: 'GOOGLE',
        googleId: response.profileObj.googleId,
        googleProfile: response.profileObj,
      })
      .then(function (response) {
        console.log('login exitoso')
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token,
        })
        navigate('home')
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no registrado')
        alert('Usuario no registrado')
      })
  }

  const onGoogleRegister = (response) => {
    console.log(response)
    console.log(response.profileObj)

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/new-user`, {
        name: response.profileObj.name,
        email: response.profileObj.email,
        loginType: 'GOOGLE',
        googleId: response.profileObj.googleId,
        googleProfile: response.profileObj,
      })
      .then(function (response) {
        console.log('Registro exitoso')
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token,
        })
        navigate('/home')
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no registrado')
        alert('Error, el registro no fue exitoso')
      })
  }

  const onGoogleLoginError = (response) => {
    console.error('Error en Google login', response)
  }

  const googleButtonContainer = {
    width: '100%',
  }

  const iconStyle = {
    fontSize: '1.25rem',
  }

  return (
    <div style={googleButtonContainer}>
      <GoogleLogin
        clientId="912198019592-n0ehhv002oe38urkl32dnjmkcgt0vtnd.apps.googleusercontent.com"
        render={(renderProps) => (
          <CustomGoogle
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}>
            <i style={iconStyle} className="fab fa-google"></i>
            {`${isSignUp ? 'Registrarse' : 'Ingresar'} con google`}
          </CustomGoogle>
        )}
        onSuccess={isSignUp ? onGoogleRegister : onGoogleLogin}
        onFailure={onGoogleLoginError}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export {LoginWithGoogle}
