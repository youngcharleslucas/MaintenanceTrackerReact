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
    const [miles_current, setMilesCurrent] = useState ("");

    const newVehicle = {
        vin: vin,
        make: make,
        model: model,
        trim: trim,
        drive_type: drive_type,
        vehicle_type: vehicle_type,
        miles_current: miles_current
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
        <Container fluid className='create-vehicle-container'>
            <>
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group controlId="formBasicVIN">                        
                        <Form.Control 
                            className='control-space' 
                            style={{width:"300px"}} 
                            type="text"
                            maxlength="17" 
                            onChange={(e) => setVIN(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='label'> VIN </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicMake">
                        <Form.Control className='control-space' 
                            style={{width:"300px"}} 
                            type="text" 
                            onChange={(e) => setMake(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'> Make </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicModel">                        
                        <Form.Control className='control-space' 
                            style={{width:"300px"}} 
                            type="text" 
                            onChange={(e) => setModel(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'> Model </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicTrim">                        
                        <Form.Control className='control-space' 
                            style={{width:"300px"}} 
                            type="text" 
                            onChange={(e) => setTrim(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'> Trim </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicDriveType">                        
                        <Form.Select className='control-space' 
                            style={{width:"300px"}} 
                            as="select"
                            // value={drive_type} 
                            onChange={(e) => setDriveType(e.target.value)}>
                                <option value=""></option>
                                <option value="FWD">FWD</option>
                                <option value="AWD">AWD</option>
                                <option value="RWD">RWD</option>
                                <option value="4x4">4x4</option>
                        </Form.Select>
                        <Form.Label className='label'> Drive Type </Form.Label>
                    </Form.Group>

                    {/* Form with dropdown option */}
                    <Form.Group controlId="formBasicVehicleType">                        
                        <Form.Select className='control-space' 
                            style={{width:"300px"}}
                            as="select"
                            // value={vehicle_type}
                            onChange={(e) => setVehicleType(e.target.value*1)}>
                                <option value=""></option>
                                <option value="1">Car</option>
                                <option value="2">Motorcycle</option>
                        </Form.Select>
                        <Form.Label className='label'> Vehicle Type </Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicMilesCurrent">                        
                        <Form.Control className='control-space' 
                            style={{width:"300px"}} 
                            type="text" 
                            onChange={(e) => setMilesCurrent(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'> Current Miles </Form.Label>
                    </Form.Group>

                    <Button className='button' variant="dark" type="submit">Submit</Button>

                </Form>
            </>
        </Container>
    );
};

export default VehicleCreate;