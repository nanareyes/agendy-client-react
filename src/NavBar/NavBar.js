import React from "react";
import { NavbarBrand, Navbar, Nav,NavLink, NavItem, NavbarToggler, Collapse, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import logo1 from '../assets/logo1.png'
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const {user,logout} = useAuth0();
  const onLogout = ()=> {
    logout({
      returnTo: window.location.origin,
    })
  }
    return (
      <React.Fragment>
      <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
        <img src={logo1} className="App-logo" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/">
                Servicios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Agenda
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Nuestro Equipo
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
          <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Bienvenid@ a Agendy {user ? user.given_name : ''}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Mi perfil
                </DropdownItem>
                <DropdownItem onClick={onLogout}>
                  Salir
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      </React.Fragment>
    );
}


export { NavBar };