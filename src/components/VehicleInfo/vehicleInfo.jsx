import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const VehicleInfo = (props) => {
    const [vehicle_info, setVehicleInfo] = useState([]);


    const {vehicle_id} = useParams();

    useEffect(() => {
        getVehicleInfo()
    }, [])

    const getVehicleInfo = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/vehicle/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicleInfo(response.data)

    }
    return (
    
        <>
            <h1>Vehicle Info</h1>
            <h2>{vehicle_id}</h2>
            {console.log(vehicle_id)}
            <CardGroup>
                <Row xs={1} md={1} className="g-4">
                    {vehicle_info.filter((e) => e.id == vehicle_id).map((filtered) => 
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Vehicle Information</Card.Title> 
                                    <Card.Text>Make: {filtered.make} </Card.Text> 
                                    <Card.Text>Model: {filtered.model} </Card.Text> 
                                    <Card.Text>Trim: {filtered.trim} </Card.Text> 
                                    <Card.Text>Drive Type: {filtered.drive_type} </Card.Text>  
                                    <Card.Text>VIN: {filtered.vin} </Card.Text>                   
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </CardGroup>
        </>
    );
}

export default VehicleInfo;