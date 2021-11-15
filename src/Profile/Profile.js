import React from "react";
import { NavBar } from '../NavBar/NavBar';
import { EditProfile } from "./EditProfile";


const Profile = () => {
  console.log('profile')
  return (
    <div>
      <NavBar />
      <h2>MI PERFIL  </h2>
      <p>
        <EditProfile />
      </p>
    </div>

  );
}


export { Profile };
