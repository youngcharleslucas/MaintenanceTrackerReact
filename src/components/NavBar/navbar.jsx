import React, {useState, useEffect} from 'react'
import {Nav, NavDropdown, Container, Navbar, Offcanvas} from 'react-bootstrap'
import axios from 'axios'

const NavBar = ({user}) => {
    const [overdue, setOverdue] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        getAlerts()
    }, [user])

    // Get operator's vehicles through id, adding get all maintenance logs to get vehicles w/ incomplete maintenance log for garage
    const getAlerts = async () => {
        const jwt = localStorage.getItem('token')
        let response_logs = await axios.get('http://127.0.0.1:8000/api/maintenance_log/all/incomplete/', {headers: {Authorization: 'Bearer ' + jwt}})
        let logs = response_logs.data
        let overdue_all = logs.filter((e) => e.vehicle.miles_current >= (e.log_miles + e.maintenance.maintenance_miles))
        let user_overdue_logs = overdue_all.filter((e) => e.operator.id == user.user_id)
        setOverdue(user_overdue_logs)
        let upcoming_all = logs.filter((e) => (e.vehicle.miles_current + 500) > (e.log_miles + e.maintenance.maintenance_miles) && (e.vehicle.miles_current) < (e.log_miles + e.maintenance.maintenance_miles))
        let user_upcoming_logs = upcoming_all.filter((e) => e.operator.id == user.user_id)
        setUpcoming(user_upcoming_logs)
    };





    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {console.log(overdue)}
            {console.log(upcoming)}
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
                    {user && (
                        <>
                            <Nav className='danger-navbar' variant='danger' bg='light'>
                                <Navbar.Brand className='danger-navbar'>Overdue: {overdue.length}</Navbar.Brand>
                                <Navbar.Brand className='warning-navbar'>Approaching: {upcoming.length}</Navbar.Brand>
                            </Nav>                        
                        </>                        
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavBar;