import React, {useRef} from 'react'
import {useNavBar} from './controller'
import logo1 from '../assets/logo1.png'
import {NavLink, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {Menu} from 'primereact/menu'
import {Button} from 'primereact/button'
import {StyledImage} from '../StyledComponents/StyledImage'
import {userState} from '../atoms'
import {useRecoilState} from 'recoil'
import {AvatarNavbar} from '../StyledComponents/Avatar'
import avatarDefault from '../assets/avatarDefault.jpg'

const NavContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .link-list {
    all: unset;
    justify-content: center;
    display: flex;
    margin: 0;
    align-items: center;
    gap: 1rem;
    list-style: none;
    flex-grow: 1;

    li > a {
      text-decoration: none;
      color: var(--vino);

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .p-button {
    &:focus {
      box-shadow: none;
    }
    gap: 1rem;
  }

  .p-button-text {
    font-family: 'PT mono';
    color: var(--vino);
  }
`

const NavBar = () => {
  let navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)

  console.log(setUser)
  const {userName, onLogout} = useNavBar()
  const menu = useRef(null)
  const items = [
    {
      items: [
        {
          label: 'Inicio',
          icon: 'pi pi-home',
          command: (e) => {
            navigate('/home')
          },
        },
        {
          label: 'Mi Perfil',
          icon: 'pi pi-user-edit',
          command: (e) => {
            navigate('/profile')
          },
        },
        ...(user.userType === 'Estilista'
          ? [
              {
                label: 'Mi Horario',
                icon: 'pi pi-calendar',
                command: (e) => {
                  navigate('/schedule')
                },
              },
            ]
          : []),
        {
          label: 'Salir',
          icon: 'pi pi-sign-out',
          command: (e) => {
            onLogout()
          },
        },
      ],
    },
  ]

  return (
    <React.Fragment>
      <NavContainer>
        <NavLink to="/home">
          <StyledImage src={logo1} size="180px" />
        </NavLink>
        <ul className="link-list">
          <li>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/agenda">Mis citas</NavLink>
          </li>
          <li>
            <NavLink to="/team">Equipo</NavLink>
          </li>
        </ul>
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <Button
          className="p-button-text"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="popup_menu"
          aria-haspopup>
          <span className="p-px-4">
            Bienvenid@ <br /> {userName}{' '}
          </span>
          <i className="pi pi-angle-down" />
          <AvatarNavbar image={user?.imageUrl || avatarDefault} />
        </Button>
      </NavContainer>
    </React.Fragment>
  )
}

export {NavBar}
