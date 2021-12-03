import React from 'react'
import {NavBar} from '../NavBar/NavBar'
import {EditProfile} from './EditProfile'
import {SectionTitle} from '../StyledComponents/SectionTitle'

const Profile = () => {
  console.log('profile')
  return (
    <div>
      <NavBar />
      <SectionTitle title="MI PERFIL" />
      <EditProfile />
    </div>
  )
}

export {Profile}
