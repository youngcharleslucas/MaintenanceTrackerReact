import React, { useState, useEffect } from 'react';
import { Container, Card, CardGroup, Button, Row, Stack } from 'react-bootstrap';
import axios from 'axios';
import './garage_add_vehicle.css'
import { useParams } from 'react-router-dom';

const AddVehicle = (props) => {
    const [vehicles, setVehicles] = useState([])
    const [added_vehicle, setAddedVehicle] = useState("")

    const {user_id} = useParams();

    useEffect(() => {
        getVehicles()
    }, [added_vehicle])

    const getVehicles = async () => {
        const jwt = localStorage.getItem('token')
        // let response = await axios.get('http://127.0.0.1:8000/api/vehicle/all/', {headers: {Authoriaztion: 'Bearer ' + jwt}})
        let response = await axios.get(`http://127.0.0.1:8000/api/vehicle/nongarage_vehicle/${user_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicles(response.data)
    };

    const handleSubmit = async (event, added_vehicle) => {
        event.preventDefault();
        const new_relation = {
            operator: user_id,
            vehicle: added_vehicle
        };
        const jwt = localStorage.getItem('token')
        let response = await axios.post(`http://127.0.0.1:8000/api/operator_vehicle/add_vehicle/`, new_relation, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        if (response.request.status === 201) {
            alert('Vehicle added to garage');
        }
        setAddedVehicle(response.data)

    }

    return (
        <Container fluid className='addvehicle-container'>
            <>
                <CardGroup>
                    <Row xs={1} md={1} >
                        {console.log(vehicles)}
                        {vehicles.map((e) =>
                            <Card className='addvehicle-card'>
                                <Card.Img className="addvehicle-img" variant="top" src="https://i.imgur.com/kdTpGzr.jpg" />
                                <Stack direction="horizontal" gap={3}>
                                    <Card.Title className='addvehicle-title'>{e.make} {e.model}</Card.Title>
                                    <Button className="addvehicle-button" variant="dark" onClick={(event) => handleSubmit(event, e.id)}>Add</Button>
                                </Stack>
                            </Card>
                        )}
                    </Row>
                </CardGroup>
            </>
        </Container>
    );
};

export default AddVehicle;

// filter((filtered) => filtered.operator.id != user_id)