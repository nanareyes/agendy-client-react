import React from 'react'
import {NavBar} from '../NavBar/NavBar'
import {EditProfile} from './EditProfile'
import {Footer} from '../Footer/Footer'

const Profile = () => {
  console.log('profile')
  return (
    <div>
      <NavBar />
      <h2>MI PERFIL </h2>
      <EditProfile />
      <Footer />
    </div>
  )
}

export {Profile}
