import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const GarageVehicles = (props) => {
    const [vehicles, setVehicles] = useState("");

    const getVehicles = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/operator_vehicle/garage/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        // if (response.request.status === 201){
            
        // }
    };

    return (
        <Container>
            <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Vehicle description</Card.Text>
                    <Button variant="primary">More Info</Button>
                    <Button variant="primary">Maintenance</Button>
                </Card.Body>
            </Card>
            </>
        </Container>

    );
};

export default GarageVehicles;