import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import './vehicle_create.css'

const VehicleCreate = () => {
    const [vin, setVIN] = useState ("");
    const [make, setMake] = useState ("");
    const [model, setModel] = useState ("");
    const [trim, setTrim] = useState ("");
    const [drive_type, setDriveType] = useState ("");
    const [vehicle_type, setVehicleType] = useState ("");

    const newVehicle = {
        vin: vin,
        make: make,
        model: model,
        trim: trim,
        drive_type: drive_type,
        vehicle_type: vehicle_type,
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://127.0.0.1:8000/api/vehicle/create/', newVehicle, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        if (response.request.status === 201) {
            alert('New vehicle registered');
            return (window.location = '/')
        }
    };


    return (
        <Container fluid className='container'>
            <>
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group controlId="formBasicVIN">                        
                        <Form.Control className='control' type="text" onChange={(e) => setVIN(e.target.value)}></Form.Control>
                        <Form.Label className='label'> VIN </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicMake">
                        <Form.Control className='control' type="text" onChange={(e) => setMake(e.target.value)}></Form.Control>
                        <Form.Label className='label'> Make </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicModel">                        
                        <Form.Control className='control' type="text" onChange={(e) => setModel(e.target.value)}></Form.Control>
                        <Form.Label className='label'> Model </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicTrim">                        
                        <Form.Control className='control' type="text" onChange={(e) => setTrim(e.target.value)}></Form.Control>
                        <Form.Label className='label'> Trim </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicDriveType">                        
                        <Form.Control className='control' type="text" onChange={(e) => setDriveType(e.target.value)}></Form.Control>
                        <Form.Label className='label'> Drive Type </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicVehicleType">                        
                        <Form.Control className='control' type="text" onChange={(e) => setVehicleType(e.target.value)}></Form.Control>
                        <Form.Label className='label'> Vehicle Type </Form.Label>
                    </Form.Group>

                    <Button className='button' variant="dark" type="submit">Submit</Button>

                </Form>
            </>
        </Container>
    );
};

export default VehicleCreate;