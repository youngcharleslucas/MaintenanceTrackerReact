import React from 'react'
import {Nav, NavDropdown, Container, Navbar, Offcanvas} from 'react-bootstrap'

const NavBar = ({user}) => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Maintenance Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offCanvasNavbarLabel">OffCanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="login/">Login</Nav.Link>
                            <Nav.Link href="logout/">Logout</Nav.Link>
                            <Nav.Link href="register_user/">Register Account</Nav.Link>
                            <NavDropdown title="Vehicles" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="/garage">My Vehicle Garage</NavDropdown.Item>
                                <NavDropdown.Item href="/vehicle/create">Register Vehicle</NavDropdown.Item>
                                <NavDropdown.Item href="/">Add Vehicle to Garage</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );

};

export default NavBar;