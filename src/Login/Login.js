/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useLogin } from './controller'
import { LoginWithGoogle } from './LoginWithGoogle'
import styled from 'styled-components'

//Styled components

const ActionsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  place-items: center;
`

function Login(props) {
  const { setInputEmail, setInputPassword, loginHandler } = useLogin()

  // styles || Considerar refactorizar a styled components
  const inputStyle = {
    border: '2px solid var(--vino)',
    color: 'var(--vino)',
    padding: '0.8rem .75rem',
  }

  const formStyle = {
    width: '50%',
    minWidth: '280px',
    display: 'grid',
    alignItems: 'center',
  }

  const buttonStyle = {
    width: '100%',
    backgroundColor: 'var(--fucsia)',
    color: 'var(--white)',
    fontFamily: 'Ubuntu',
    border: 'none',
  }

  const linkStyles = {
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
  }

  const pinkDivider = {
    width: '80%',
    margin: '1rem auto',
    border: '2px solid var(--fucsia)',
  }

  return (
    <React.Fragment>
      <Form style={formStyle} inline>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            style={inputStyle}
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <Label for="exampleEmail">Correo</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            style={inputStyle}
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <Label for="examplePassword">Contraseña</Label>
        </FormGroup>
        <ActionsContainer>
          <Button style={buttonStyle} className="login" onClick={loginHandler}>
            Iniciar Sesión
          </Button>
          <a style={linkStyles} href="/">
            {' '}
            ! olvidé mi contraseña ¡
          </a>
        </ActionsContainer>

        <hr style={pinkDivider} />
        <ActionsContainer>
          <LoginWithGoogle />
          <a style={linkStyles} href="/register">
            crear tu cuenta
          </a>
        </ActionsContainer>
      </Form>
    </React.Fragment>
  )
}

export { Login }
