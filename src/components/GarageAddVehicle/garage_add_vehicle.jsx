import React, { useState, useEffect } from 'react';
import { Container, Card, CardGroup, DropdownButton, Dropdown, Row } from 'react-bootstrap';
import axios from 'axios';
import './garage_add_vehicle.css'

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
        <Container fluid className='container'>
            <>
                <CardGroup>
                    <Row xs={1} md={1} >
                        {vehicles.map((e) =>
                            <Card className='special-card'>
                                <Card.Img className="img" variant="top" src="https://i.imgur.com/kdTpGzr.jpg" />
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