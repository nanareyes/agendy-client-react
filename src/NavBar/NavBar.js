import React from "react";
import { NavbarBrand, Row, Navbar, Nav, NavLink, NavItem, NavbarToggler, Collapse, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, CardImg } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userState } from "../atoms";
import logo1 from '../assets/logo1.png'
import { AvatarUser } from "./AvatarUser";

const NavBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  console.info('user en NavBar', user);

  const userName = user.loginType === 'GOOGLE' ? user.givenName : user.name;

  const onLogout = () => {
    // Para salir, se actualiza el userState, seteando
    // isAuthenticated en false y rediriengo al landing page
    setUser({ isAuthenticaded: false });
    navigate("/");
  };

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