import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Logo } from '../Logo/Logo'
import { useRegister } from './controller'
import { LoginWithGoogle } from '../Login/LoginWithGoogle'
import { LandingContainer } from '../StyledComponents/LandingContainer'
import styled from 'styled-components'

const ActionsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  place-items: center;
`

function Register(props) {
  const {
    setInputName,
    setInputEmail,
    setInputPassword,
    setInputPassword2,
    setInputUserType,
    onRegister,
  } = useRegister()

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
            id="Name"
            name="name"
            style={inputStyle}
            placeholder="Name"
            type="name"
            onChange={(e) => setInputName(e.target.value)}
          />
          <Label for="exampleEmail">Nombres</Label>
        </FormGroup>{' '}
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            style={inputStyle}
            placeholder="Email"
            type="email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <Label for="exampleEmail">Correo</Label>
        </FormGroup>{' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            style={inputStyle}
            placeholder="Password"
            type="password"
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <Label for="examplePassword">Contraseña</Label>
        </FormGroup>{' '}
        <FormGroup floating>
          <Input
            id="examplePassword2"
            name="password2"
            style={inputStyle}
            placeholder="Password2"
            type="password"
            onChange={(e) => setInputPassword2(e.target.value)}
          />
          <Label for="examplePassword">Confirmar contraseña</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="TypeCliente"
            name="TypeCliente"
            placeholder="TypeCliente"
            type="radio"
            onChange={(e) => setInputUserType(e.target.value)}
          />{' '}
          <Label check>Soy Cliente</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="TypeCliente"
            name="TypeCliente"
            placeholder="TypeCliente"
            type="radio"
            onChange={(e) => setInputUserType(e.target.value)}
          />{' '}
          <Label check>Soy Estilista</Label>
        </FormGroup>
        <ActionsContainer>
          <Button style={buttonStyle} className="register" onClick={onRegister}>
            Registrarme
          </Button>
        </ActionsContainer>
        <hr style={pinkDivider} />
        <ActionsContainer>
          <LoginWithGoogle isSignUp={true} />
        </ActionsContainer>
      </Form>
    </React.Fragment>
  )
}

export { Register }
