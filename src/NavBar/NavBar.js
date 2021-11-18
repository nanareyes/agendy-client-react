import React, { useRef } from 'react'
// import { NavLink as RRNavLink } from 'react-router-dom'
import { AvatarUser } from './AvatarUser'
// import { useNavBar } from './controller'
import logo1 from '../assets/logo1.png'
import styled from 'styled-components'

import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'

import { StyledImage } from '../StyledComponents/StyledImage'

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
	// const { userName, onLogout } = useNavBar()
	const menu = useRef(null)
	const items = [
		{
			items: [
				{
					label: 'Mi Perfil',
					icon: 'pi pi-user-edit',
					command: (e) => {
						window.location.href = '/Profile'
					},
				},
				{
					label: 'Salir',
					icon: 'pi pi-sign-out',
					command: (e) => {
						window.location.href = '/'
					},
				},
			],
		},
	]
	const userName = 'John Doe'

	return (
		<React.Fragment>
			<NavContainer>
				<StyledImage src={logo1} size='180px' />
				<ul className='link-list'>
					<li>
						<a href='/home'>Servicios</a>
					</li>
					<li>
						<a href='/agenda'>Agenda</a>
					</li>
					<li>
						<a href='/team'>Equipo</a>
					</li>
				</ul>
				<Menu model={items} popup ref={menu} id='popup_menu' />
				<Button
					className='p-button-text'
					onClick={(event) => menu.current.toggle(event)}
					aria-controls='popup_menu'
					aria-haspopup>
					<span className='p-px-4'>
						Bienvenid@ <br /> {userName}{' '}
					</span>
					<i className='pi pi-angle-down' />
					<AvatarUser />
				</Button>
			</NavContainer>
		</React.Fragment>
	)
}

export { NavBar }
