import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import './alert_complete.css';


const AlertComplete = ({user}) => {
    const [maintenance_name, setMaintenanceName] = useState ([]);
    const [maintenance_id, setMaintenanceId] = useState ("");
    const [vehicle_id, setVehicleId] = useState ("");
    const [log_date, setLogDate] = useState ("");
    const [log_miles, setLogMiles] = useState ("");
    const [log_note, setLogNote] = useState ("");
    const complete = false;

    const {log_id} = useParams()

    useEffect(() => {
        get_log()
    }, [])


    const new_log = {
        maintenance: maintenance_id,
        log_date: log_date,
        log_note: log_note,
        log_miles: log_miles,
        complete: complete,
        operator: user.user_id,
        vehicle: vehicle_id
    }

    // get maintenance log by log id. On the Django side I used a .filter QuerySet, see comment in maintenance_create_log on why
    const get_log = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/${log_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        // console.log(response.data)
        const log = response.data
        setMaintenanceName(log[0].maintenance.maintenance_name)
        setMaintenanceId(log[0].maintenance.id)
        setVehicleId(log[0].vehicle.id)    
    }

    let handleSubmit = async (e, id) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        // Makes post of new log
        let response = await axios.post('http://127.0.0.1:8000/api/maintenance_log/log/new/', new_log, {headers: {Authorization: 'Bearer ' + jwt}})
        // Marks the previous Log alert complete
        let response_complete_old_log = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/complete/${id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        console.log(response_complete_old_log)
        if (response.request.status === 201) {
            alert('New log created');
            return (window.location = `/alerts_list/${vehicle_id}/`)
        }
    };

    return (
        <Container fluid className='create-log-container'>
            <>
            {/* {console.log(maintenance_items)} */}
                <Form onSubmit={(e) => handleSubmit(e, log_id)}>

                    <Form.Group controlId="formBasicMaintenance">
                        <Form.Label className='create-log-label' >{maintenance_name}</Form.Label>
                    </Form.Group>

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

export default AlertComplete;