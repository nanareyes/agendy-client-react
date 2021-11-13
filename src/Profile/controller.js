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

  const onProfile = (e) => {
    e.preventDefault();

    axios.post('https://agendy-api.herokuapp.com/user/:id', {
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
    setInputDateOfBirth,
    setInputPhone,
    setInputDirection,
    setInputCity,
    onProfile,
  }
};

export { useProfile };
