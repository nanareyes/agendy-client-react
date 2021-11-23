import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';

const useLogin = () => {
  let navigate = useNavigate();
  const [, setUser] = useRecoilState(userState);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: inputEmail,
      password: inputPassword
    })
      .then(function (response) {
        console.log('login exitoso')
        setUser({
          isAuthenticaded: true,
          ...response.data.userDB,
          token: response.data.token
        });
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
