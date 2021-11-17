import axios from 'axios';
import { DateTime } from 'luxon';
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';


const useProfile = () => {
  // let navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  console.log("User en Profile controller", user);

  const date = DateTime.fromISO(user.dateOfBirth)
  const dateInput = date.toFormat("yyyy-mm-dd");

  const [inputDateOfBirth, setInputDateOfBirth] = useState(dateInput);
  const [inputPhone, setInputPhone] = useState(user.phone);
  const [inputAddress, setInputAddress] = useState(user.address);
  const [inputCity, setInputCity] = useState(user.city);
  const [inputUserType, setInputUserType] = useState(user.userType);

  const userName = user.loginType === 'GOOGLE' ? user.givenName : user.name;
  const userId = user.loginType === 'GOOGLE' ? user.googleId : user.id;
  const userPhoto = user.loginType === 'GOOGLE' ? user.imageUrl : user.photo;

  const [inputPhoto, setInputPhoto] = useState(user.photo);

  const onSubmitProfile = (e) => {
    // console.log('Completar perfil', user);
    e.preventDefault();

    axios.put(`https://agendy-api.herokuapp.com/api/user/${user._id}`, {
      photo: inputPhoto,
      dateOfBirth: inputDateOfBirth,
      phone: inputPhone,
      address: inputAddress,
      city: inputCity,
      userType: inputUserType
    })
      .then(function (response) {
        console.log('Actualización exitosa')
        // Una vez se actualice el perfil, se procede a actualizar el
        // estado del usuario en Recoil. Para eso, se utilizan los datos
        // que hayan actualmente en el usuario (currentUser) y se le adicionan
        // los datos que retorne el API
        setUser((currentUser) => {
          const newUser = {
            ...currentUser,
            ...response.data
          };
          // console.log("newUSer en profile", newUser);
          return newUser;
        });
        //navigate("/home");
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no actualizado')
        alert('Error, la actualización no fue exitosa')
      });
  }

  return {
    userId,
    userName,
    userPhoto,
    inputPhoto,
    inputDateOfBirth,
    inputPhone,
    inputAddress,
    inputCity,
    inputUserType,
    setInputPhoto,
    setInputDateOfBirth,
    setInputPhone,
    setInputAddress,
    setInputCity,
    setInputUserType,
    onSubmitProfile,
  }
};

export { useProfile };
