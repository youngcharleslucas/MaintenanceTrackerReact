import React, {useState} from 'react'
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'

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
        <Form onSubmit={(e) => handleSubmit(e)}>

            <Form.Group className="mb=3" controlId="formBasicVIN">
                <Form.Label> VIN </Form.Label>
                <Form.Control type="text" onChange={(e) => setVIN(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb=3" controlId="formBasicMake">
                <Form.Label> Make </Form.Label>
                <Form.Control type="text" onChange={(e) => setMake(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb=3" controlId="formBasicModel">
                <Form.Label> Model </Form.Label>
                <Form.Control type="text" onChange={(e) => setModel(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb=3" controlId="formBasicTrim">
                <Form.Label> Trim </Form.Label>
                <Form.Control type="text" onChange={(e) => setTrim(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb=3" controlId="formBasicDriveType">
                <Form.Label> Drive Type </Form.Label>
                <Form.Control type="text" onChange={(e) => setDriveType(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb=3" controlId="formBasicVehicleType">
                <Form.Label> Vehicle Type </Form.Label>
                <Form.Control type="text" onChange={(e) => setVehicleType(e.target.value)}></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>

        </Form>
    );
};

export default VehicleCreate;