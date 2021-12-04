import React, {useState, useRef} from 'react'
import {useNavBar} from './controller'
import logo1 from '../assets/logo1.png'
import {NavLink, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {Menu} from 'primereact/menu'
import {Button} from 'primereact/button'
import {Sidebar} from 'primereact/sidebar'
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

  .fullscreen-menu {
    display: none;
  }

  @media (max-width: 800px) {
    .link-list,
    .profile-menu-button,
    .profile-menu {
      display: none;
    }

    .fullscreen-menu {
      display: block;
    }
  }
`

const NavBar = () => {
  let navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)
  const [visibleRight, setVisibleRight] = useState(false)

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

  const links = [
    {text: 'Inicio', path: '/home'},
    {text: 'Servicios', path: '/services'},
    {text: 'Mis citas', path: '/calendar'},
    {text: 'Equipo', path: '/team'},
  ]

  const AppLinks = (items) => {
    return items.map((item, key) => {
      return (
        <li key={key}>
          <NavLink to={item.path}>{item.text}</NavLink>
        </li>
      )
    })
  }

  return (
    <React.Fragment>
      <NavContainer>
        <NavLink to="/home">
          <StyledImage src={logo1} size="180px" />
        </NavLink>
        <ul className="link-list">{AppLinks(links)}</ul>

        <Menu
          className="profile-menu"
          model={items}
          popup
          ref={menu}
          id="popup_menu"
        />
        <Button
          className="profile-menu-button p-button-text"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="popup_menu"
          aria-haspopup>
          <span className="p-px-4">
            Bienvenid@ <br /> {userName}{' '}
          </span>
          <i className="pi pi-angle-down" />
          <AvatarNavbar image={user?.imageUrl || avatarDefault} />
        </Button>

        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}>
          <div
            className="fullscreen-header"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}>
            <Menu
              className="profile-menu-full"
              model={items}
              popup
              ref={menu}
              id="popup_menu"
            />
            <Button
              className="profile-menu-button-full p-button-text"
              onClick={(event) => menu.current.toggle(event)}
              aria-controls="popup_menu"
              aria-haspopup>
              <span className="p-px-4">
                Bienvenid@ <br /> {userName}{' '}
              </span>
              <i className="pi pi-angle-down" />
              <AvatarNavbar image={user?.imageUrl || avatarDefault} />
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            className="fullscreen-body">
            <ul
              className="link-list-body"
              style={{
                paddingLeft: '0rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                listStyleType: 'none',
                textDecoration: 'none',
                paddingTop: '2rem',
                justifyContent: 'center',
                alingItems: 'center',
              }}>
              {AppLinks(links)}
            </ul>
          </div>
        </Sidebar>
        <Button
          className="fullscreen-menu"
          icon="pi pi-bars"
          onClick={() => setVisibleRight(true)}
        />
      </NavContainer>
    </React.Fragment>
  )
}

export {NavBar}
