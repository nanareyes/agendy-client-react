import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const useRegister = () => {
  let navigate = useNavigate();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPassword2, setInputPassword2] = useState('');
  const [inputType, setInputType] = useState('');

  const onRegister = (e) => {
    e.preventDefault();
    // console.log('aquí funciona el boton',inputNombres, inputEmail,inputPassword, inputPassword2)


    axios.post('https://agendy-api.herokuapp.com/api/nuevo-user', {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
      password2: inputPassword2,
      type: inputType
    })
      .then(function (response) {
        console.log('Registro exitoso')
        navigate("/home");
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no registrado')
        alert('Error, el registro no fue exitoso')
      });
  }

  return {
    setInputName,
    setInputEmail,
    setInputPassword,
    setInputPassword2,
    setInputType,
    onRegister,
  }
};

export { useRegister };