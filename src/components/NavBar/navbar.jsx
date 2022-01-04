import React from 'react'
import {Nav, NavDropdown, Container, Navbar, Offcanvas} from 'react-bootstrap'

const NavBar = ({user}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                {console.log(user)}
                <Navbar.Brand href="#">Maintenance Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-navr" aria-labelledby="offcanvasNavbarLabel" placement="start">                    
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link href="/login/">Login</Nav.Link>
                                <Nav.Link href="/register_user/">Register Account</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link href="/">Home</Nav.Link>                                
                                <Nav.Link href="/logout/">Logout</Nav.Link>                                
                                <NavDropdown title="Vehicles" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/garage">My Vehicle Garage</NavDropdown.Item>
                                    <NavDropdown.Item href="/vehicle/create">Register Vehicle</NavDropdown.Item>
                                    <NavDropdown.Item href={`/garage/add_vehicle/${user.user_id}`}>Add Vehicle to Garage</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavBar;