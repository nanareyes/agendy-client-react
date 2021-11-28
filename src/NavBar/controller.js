import {useNavigate} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {userState} from '../atoms'

const useNavBar = () => {
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()
  console.log('este es el user', user)
  const userName = user.name
  const userPhoto = user.loginType === 'GOOGLE' ? user.imageUrl : user.photo

  const onLogout = () => {
    // Para salir, se actualiza el userState, seteando
    // isAuthenticated en false y rediriengo al landing page
    setUser({isAuthenticaded: false})
    navigate('/')
  }
  return {
    user,
    setUser,
    userName,
    userPhoto,
    onLogout,
  }
}

export {useNavBar}
