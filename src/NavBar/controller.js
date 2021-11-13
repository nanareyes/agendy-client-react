import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userState } from "../atoms";

const useNavBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const userName = user.loginType === 'GOOGLE' ? user.givenName : user.name;

  const onLogout = () => {
    // Para salir, se actualiza el userState, seteando
    // isAuthenticated en false y rediriengo al landing page
    setUser({ isAuthenticaded: false });
    navigate("/");
  };
  return {
    user,
    setUser,
    userName,
    onLogout
  }
}

export { useNavBar};