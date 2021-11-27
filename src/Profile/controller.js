import axios from 'axios'
import {DateTime} from 'luxon'
// import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import {useRecoilState} from 'recoil'
import {userState, fileState, loadingState} from '../atoms'

const useProfile = () => {
  // let navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState)
  const [loading, setLoading] = useRecoilState(loadingState)

  console.log('User en Profile controller', user)

  const date = DateTime.fromISO(user.dateOfBirth)
  const dateInput = date.toFormat('yyyy-MM-dd')

  const [inputDateOfBirth, setInputDateOfBirth] = useState(dateInput)
  const [inputPhone, setInputPhone] = useState(user.phone)
  const [inputAddress, setInputAddress] = useState(user.address)
  const [inputCity, setInputCity] = useState(user.city)
  const [inputUserType, setInputUserType] = useState(user.userType)
  const [inputFile, setInputFile] = useRecoilState(fileState)

  const userName = user.name
  const userId = user.loginType === 'GOOGLE' ? user.googleId : user._id

  const onChangeFile = (e) => {
    // const files = e.target.files;
    // const cancel = !files.length;
    // if (cancel) return;

    // const [{ size, name }] = files;
    // const maxSize = 5 * 1024 * 1024;

    // if (size < maxSize) {
    //   setInputFile(e.target.files[0]);
    // } else {
    //   setInputFile(null);
    // }
    console.info(e.target.files)
    setInputFile(e.target.files[0])
  }

  const onSubmitProfile = (e) => {
    // console.log('Completar perfil', user);
    e.preventDefault()
    setLoading(true)
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/user/${user._id}`, {
        dateOfBirth: inputDateOfBirth,
        phone: inputPhone,
        address: inputAddress,
        city: inputCity,
        userType: inputUserType,
      })
      .then(function (response) {
        console.log('Actualización exitosa')
        // Una vez se actualice el perfil, se procede a actualizar el
        // estado del usuario en Recoil. Para eso, se utilizan los datos
        // que hayan actualmente en el usuario (currentUser) y se le adicionan
        // los datos que retorne el API

        console.info('inputFile', inputFile)
        const formData = new FormData()
        formData.append('file', inputFile)
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/api/profile/${user._id}`,
            formData,
            config
          )
          .then(function (response) {
            setUser((currentUser) => {
              const newUser = {
                ...currentUser,
                ...response.data,
              }
              // console.log("newUSer en profile", newUser);
              return newUser
            })
          })
        //navigate("/home");
      })
      .catch(function (error) {
        // console.log(error);
        console.log('Usuario no actualizado')
        alert('Error, la actualización no fue exitosa')
      })
      .finally(function () {
        setLoading(false)
      })
  }

  return {
    userId,
    userName,
    inputDateOfBirth,
    inputPhone,
    inputAddress,
    inputCity,
    inputUserType,
    setInputDateOfBirth,
    setInputPhone,
    setInputAddress,
    setInputCity,
    setInputUserType,
    onSubmitProfile,
    onChangeFile,
    inputFile,
    loading,
  }
}

export {useProfile}
