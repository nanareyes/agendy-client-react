import React from "react";
import GoogleLogin from 'react-google-login';

function LoginWithGoogle() {

  const onGoogleLogin = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  const onGoogleLoginError = (response) => {
    console.error("Error en Google login", response);
  }

  return (
    <div>
      <GoogleLogin
        clientId="912198019592-n0ehhv002oe38urkl32dnjmkcgt0vtnd.apps.googleusercontent.com"
        buttonText="Continuar con google"
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