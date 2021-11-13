import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {userState} from '../atoms';


const useProfile = () => {
  let navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const [inputDateOfBirth, setInputDateOfBirth] = useState(user.dateOfBirth);
  const [inputPhone, setInputPhone] = useState(user.phone);
  const [inputDirection, setInputDirection] = useState(user.direction);
  const [inputCity, setInputCity] = useState(user.city);

  const userName = user.loginType === 'GOOGLE' ? user.givenName : user.name;

  const onSubmitProfile = (e) => {
    console.log(user);
    e.preventDefault();


    axios.put(`https://agendy-api.herokuapp.com/user/${user._id}`, {
      dateOfBirth: inputDateOfBirth,
      photo: inputPhone,
      direction: inputDirection,
      city: inputCity
    })
    .then(function (response) {
      console.log('Actualización exitosa')
      navigate("/home");
    })
    .catch(function (error) {
      // console.log(error);
      console.log('Usuario no actualizado')
      alert('Error, la actualización no fue exitosa')
    });
}

  return {
    userName,
    inputDateOfBirth,
    inputPhone,
    inputDirection,
    inputCity,
    setInputDateOfBirth,
    setInputPhone,
    setInputDirection,
    setInputCity,
    onSubmitProfile,
  }
};

export { useProfile };
