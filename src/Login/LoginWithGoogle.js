import React from "react";
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import {userState} from '../atoms';

// El componente detecta si se trata de un login o registro
// con la propiedad isSignUp. Por defecto es false, indicando
// que es solo un login
function LoginWithGoogle({ isSignUp = false }) {
  // No se utiliza el estado local del componente sino
  // el estado de recoil. Asi es posible reusarlo en 
  // otros componentes, como NavBar
  const [user, setUSer] = useRecoilState(userState);
  const navigate = useNavigate();

  const onGoogleLogin = (response) => {
    console.log(response);
    console.log(response.profileObj);
    // ACtualiza los datos del usuario en el state
    setUSer({
      isAuthenticated: true,
      loginType: 'GOOGLE',
      ...response.profileObj
    });
    console.info("user", user);
    // Lo envia al home
    navigate("/home");
  }

  const onGoogleLoginError = (response) => {
    console.error("Error en Google login", response);
  }

  return (
    <div>
      <GoogleLogin
        clientId="912198019592-n0ehhv002oe38urkl32dnjmkcgt0vtnd.apps.googleusercontent.com"
        buttonText={`${isSignUp ? 'Registrarse' : 'Ingresar'} con google`}
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        onSuccess={onGoogleLogin}
        onFailure={onGoogleLoginError}
        cookiePolicy={'single_host_origin'}
      />
    </div>

  );
}

export { LoginWithGoogle }