import React, { useState, useEffect } from 'react';
import { Container, Card, CardGroup, DropdownButton, Dropdown, Row } from 'react-bootstrap';
import axios from 'axios';

const AddVehicle = (props) => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        getVehicles()
    }, [])

    const getVehicles = async () => {
        // const jwt = localStorage.getItem('token')
        // let response = await axios.get('http://127.0.0.1:8000/api/vehicle/all/', {headers: {Authoriaztion: 'Bearer ' + jwt}})
        let response = await axios.get('http://127.0.0.1:8000/api/vehicle/all/')
        console.log(response.data)
        setVehicles(response.data)
    };

    return (
        <Container>
            <>
                <CardGroup>
                    <Row xs={1} md={1} className="g-4">
                        {vehicles.map((e) =>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Title>{e.make} {e.model}</Card.Title>
                                {/* <Button type="submit" onClick={(e) => } */}
                            </Card>
                        )}
                    </Row>
                </CardGroup>
            </>
        </Container>
    );
};

export default AddVehicle;