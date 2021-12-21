import React, { useState, useEffect } from 'react';
import { Container, Card, Button, CardGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';


const GarageVehicles = (props) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles()
    }, [])

    const getVehicles = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/operator_vehicle/garage/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicles(response.data)
    };

    return (
        <Container>
            <>
              <CardGroup>
                {vehicles.map((e) =>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{e.make} {e.model}</Card.Title>
                            {/* <Card.Text>{e.drive_type}</Card.Text> */}
                            <DropdownButton id="dropdown-basic-button" title="Options">
                                <Dropdown.Item href="/">Vehicle Information</Dropdown.Item>
                                <Dropdown.Item href="/">Update Miles</Dropdown.Item>
                                <Dropdown.Item href="/">Logs</Dropdown.Item>
                                <Dropdown.Item href="/">Parts</Dropdown.Item>
                                <Dropdown.Item href="/">Maintenance</Dropdown.Item>
                                <Dropdown.Item href="/">Alerts</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                )}
              </CardGroup>    
            </>
        </Container>

    );
};

export default GarageVehicles;