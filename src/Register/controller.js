import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';


const useRegister = () => {
  let navigate = useNavigate();
  const [, setUser] = useRecoilState(userState);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPassword2, setInputPassword2] = useState('');
  const [inputUserType, setInputUserType] = useState('');

  const onRegister = (e) => {
    e.preventDefault();
    // console.log('aquí funciona el boton',inputNombres, inputEmail,inputPassword, inputPassword2)


    axios.post('https://agendy-api.herokuapp.com/api/new-user', {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
      password2: inputPassword2,
      userType: inputUserType
    })
      .then(function (response) {
        console.log('Registro exitoso')
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token
        });
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
    setInputUserType,
    onRegister,
  }
};

export { useRegister };