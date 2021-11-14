import React from "react";
import { NavbarBrand, Row, Navbar, Nav, NavLink, NavItem, NavbarToggler, Collapse, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, CardImg } from 'reactstrap';
import { Link } from "react-router-dom";
import { AvatarUser } from "./AvatarUser";
import { useNavBar } from "./controller";
import logo1 from '../assets/logo1.png'


const NavBar = () => {
  const  {
    userName,
    onLogout
  } = useNavBar();


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
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="home">
                  Servicios
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="home">
                  Agenda
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="home">
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
                  Bienvenid@ a Agendy {userName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                    <Link to="/profile">Mi perfil</Link>
                  </DropdownItem>
                  <DropdownItem onClick={onLogout}>
                    Salir
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Row>
                <AvatarUser />
              </Row>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
}


export { NavBar };