import {useAuth} from '../login/Auth';
import {useHistory} from "react-router-dom";
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap";
import React from "react";
import style from '../../style/scss/navigationbar.module.scss';
import {faApple} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
    let history = useHistory();
    let auth = useAuth();

    return (
        <div>
            <Navbar variant="dark" className={style.ColorNav} expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <FontAwesomeIcon icon={faApple}/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Navbar.Collapse id="navbar-start">
                            <NavDropdown
                                id="nav-dropdown-start"
                                title="Dropdown"
                                className={style.RemoveCaret}
                                menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="navbar-profiles">
                            <NavDropdown
                                id="nav-dropdown-profiles"
                                title="Dropdown"
                                className={style.RemoveCaret}
                                menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>
                    </Nav>
                    <Nav className="ms-auto">
                        <button
                            onClick={() => {
                                auth.signout(() => history.push("/login"));
                            }}>
                            Sign out
                        </button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;