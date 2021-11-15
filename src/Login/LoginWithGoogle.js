import React from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components'
// import GoogleButton from 'react-google-button'

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

function LoginWithGoogle() {
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
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
        //buttonText="Continuar con google"
        render={(renderProps) => (
          <CustomGoogle
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i style={iconStyle} className="fab fa-google"></i>
            Continuar con google
          </CustomGoogle>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export { LoginWithGoogle }
