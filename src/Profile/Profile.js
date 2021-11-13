import React from "react";
import { NavBar } from '../NavBar/NavBar';
import { EditProfile } from "./EditProfile";


const Profile = () => {
  console.log('profile')

  return (
    <div>
      <NavBar/>
      <p>
        Perfil de 
        <EditProfile/>

      </p>
    </div>

  );
}


export { Profile };
