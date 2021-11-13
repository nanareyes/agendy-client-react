import React from "react";
import { NavBar } from '../NavBar/NavBar';
import { EditProfile } from "./EditProfile";
import { useProfile } from "./controller";


const Profile = () => {
  const {
    userName } = useProfile();
  console.log('profile')

  return (
    <div>
      <NavBar />
      <p>
        Perfil de {userName}
        <EditProfile />

      </p>
    </div>

  );
}


export { Profile };
