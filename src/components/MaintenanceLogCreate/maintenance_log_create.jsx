import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import './maintenance_log_create.css';


const MaintenanceLogCreate = () => {
    // const [maintenance_items, setMaintenaceItems] = useState ("");
    const [maintenance, setMaintenance] = useState ("");
    const [log_date, setLogDate] = useState ("");
    const [log_miles, setLogMiles] = useState ("");
    const [log_note, setLogNote] = useState ("");
    const complete = false;
    const [operator, setOperator] = useState ("");
    const [vehicle, setVehicle] = useState ("");

    const new_log = {
        maintenance: maintenance,
        log_date: log_date,
        log_note: log_note,
        log_miles: log_miles,
        complete: complete,
        operator: operator,
        vehicle: vehicle
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.post('http://127.0.0.1:8000/api/maintenance_log/log/new/', new_log, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        if (response.request.status === 201) {
            alert('New log created');
            // return (window.location = '')
        }
    };

    return (
        <Container fluid className='create-log-container'>
            <>
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group controlId="formBasicMaintenance">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setMaintenance(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Maintenance</Form.Label>
                    </Form.Group>

                    {/* <Form.Group controlId="formBasicLogDate">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setLogDate(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Log Date</Form.Label>
                    </Form.Group> */}

                    <Form.Group controlId="formBasicLogDate">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="date"
                            onChange={(e) => setLogDate(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Log Date</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicLogMiles">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setLogMiles(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Log Miles</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicVehicle">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setVehicle(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Vehicle</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicOperator">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setOperator(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Operator</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicLogNote">
                        <Form.Control
                            className='create-log-control'
                            style={{width:"300px"}}
                            type="text"
                            onChange={(e) => setLogNote(e.target.value)}>
                        </Form.Control>
                        <Form.Label className='create-log-label'>Log Note</Form.Label>
                    </Form.Group>

                    <Button className='create-log-button' variant="dark" type="submit">Submit</Button>

                </Form>
            </>
        </Container>

    );
};

export default MaintenanceLogCreate;