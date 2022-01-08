import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import './maintenance_log_create.css';


const MaintenanceLogCreate = ({user}) => {
    const [maintenance_items, setMaintenaceItems] = useState ([]);
    const [maintenance, setMaintenance] = useState ("");
    const [log_date, setLogDate] = useState ("");
    const [log_miles, setLogMiles] = useState ("");
    const [log_note, setLogNote] = useState ("");
    const complete = true;

    const {vehicle_id} = useParams()

    useEffect(() => {
        get_dropdown_maintenance_items()
    }, [])


    const new_log = {
        maintenance: maintenance,
        log_date: log_date,
        log_note: log_note,
        log_miles: log_miles,
        complete: complete,
        operator: user.user_id,
        vehicle: vehicle_id
    }

    // get maintenance item name and id for dropdown
    const get_dropdown_maintenance_items = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_item/${vehicle_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        // console.log(response.data)
        const maintenance_object = response.data
        const maintenance_array = []
        maintenance_object.map((e) => maintenance_array.push({
            id: e.id,
            maintenance_name: e.maintenance_name
        }))
        setMaintenaceItems(maintenance_array)     
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
            {console.log(maintenance_items)}
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group controlId="formBasicMaintenance">
                        <Form.Select
                            className='create-log-control'
                            style={{width:"300px"}}
                            as="select"
                            value={maintenance}
                            onChange={(e) => setMaintenance(e.target.value)}>
                                {maintenance_items.map((e) =>
                                <option value={e.id}>{e.maintenance_name}</option>
                                )}
                        </Form.Select>
                        <Form.Label className='create-log-label'>Maintenance</Form.Label>
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

export default MaintenanceLogCreate;