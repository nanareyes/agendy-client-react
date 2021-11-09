/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './User.css';

function User(props) {
  let navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    // console.log('aquí funciona el boton',inputEmail,inputPassword)


    axios.post('https://agendy-api.herokuapp.com/login', {
      email: inputEmail,
      password: inputPassword
    })
    .then(function (response) {
        console.log('login exitoso')
        navigate("home");
    })
    .catch(function (error) {
      // console.log(error);
      console.log('Usuario no registrado')
      alert('Usuario no registrado')
    });

  }

  return (
    <React.Fragment>
      <Form inline>
        <Col>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e)=>
                setInputEmail(e.target.value)
              }
            />
            <Label for="exampleEmail">
              Correo
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              onChange={(e)=>
              setInputPassword(e.target.value)}
            />
            <Label for="examplePassword">
              Contraseña
            </Label>
          </FormGroup>
          {' '}
          <Button className="login"  onClick={loginHandler}>
            Iniciar Sesión
          </Button>
        </Col>
        <a href="/"> ! olvidé mi contraseña ¡</a>
        <Col>
        <Button className="google" onClick={''}>
        <i class="bi bi-google"></i>
        <span className="google mx-3">Continuar con google</span>
          </Button>
        </Col>
        <Col>
        <a href="/">crear tu cuenta</a>
        </Col>
      </Form>
    </React.Fragment>
  )
}

export { User }
