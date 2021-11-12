import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const RegisterAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect()
      }
    >
      <i className="bi bi-google"/>
      <span className="google mx-3">Registrarme con google</span>
    </button>
  );
};

export { RegisterAuth0 };