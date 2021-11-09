import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const useLogin = () => {
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

  return {
    setInputEmail,
    setInputPassword,
    loginHandler,
  }
};

export { useLogin };
