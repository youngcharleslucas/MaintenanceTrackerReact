import React, { useState, useEffect } from 'react';
import {Alert, Container, Col, Row, Button} from 'react-bootstrap';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './alerts.css'

const AlertsPage = (props) => {
    const [alert_list, setAlertList] = useState([]);
    const [log_id, setLogId] = useState("");
    const {vehicle_id} = useParams();

    useEffect(() => {
        getAlertsList()
    }, [log_id])

    const getAlertsList = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/incomplete/${vehicle_id}/`, {headers: {Authorization: 'Bearer '+ jwt}})
        console.log (response.data)
        setAlertList(response.data)
    };

    // Marks the log/alert complete without reating a new log
    // let handleSubmit = async (event, id) => {
    //     event.preventDefault();
    //     const jwt = localStorage.getItem('token')
    //     let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/complete/${id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
    //     console.log(response.data)
    //     setLogId(id)
    // };

    // Direct to create log that also marks previous log complete
    let handleSubmit = async (event, id) => {
        event.preventDefault();
        setLogId(id)
        window.location = `/alerts_complete/${id}`
        
    };


    return (
        <Container fluid className="alert-container">
            <>
            {/* <h1>Alerts</h1>
                <h2>{vehicle_id}</h2>                 */}
                    <h1 className='alert-title'>Overdue</h1>  
                    <hr className='alert-title'/>                 
                        {alert_list.filter((filtered) => filtered.vehicle.miles_current >= (filtered.log_miles + filtered.maintenance.maintenance_miles)).map((e) =>
                            <Row>
                                <Alert variant="danger" className='alert'>
                                    <Alert.Heading>{e.maintenance.maintenance_name}</Alert.Heading>
                                    <hr />
                                    <p className="mb-0">Due: {e.log_miles + e.maintenance.maintenance_miles}</p>
                                    <div className="d-flex justify-content-end">
                                        <Button variant="dark" onClick={(event) => handleSubmit(event, e.id)} >Complete</Button>
                                    </div>
                                </Alert>               
                            </Row>
                        )}
                    <h1 className='alert-title'>Approaching</h1> 
                    <hr className='alert-title'/>                    
                        {alert_list.filter((filtered) => (filtered.vehicle.miles_current + 500) > (filtered.log_miles + filtered.maintenance.maintenance_miles) && (filtered.vehicle.miles_current) < (filtered.log_miles + filtered.maintenance.maintenance_miles) ).map((e) =>
                            <Row>
                                <Alert variant="warning" className='alert'>
                                    <Alert.Heading>{e.maintenance.maintenance_name}</Alert.Heading>
                                    <hr />
                                    <p className="mb-0">Due: {e.log_miles + e.maintenance.maintenance_miles}</p>
                                    <div className="d-flex justify-content-end">
                                        <Button variant="dark" onClick={(event) => handleSubmit(event, e.id)} >Complete</Button>
                                    </div>
                                </Alert>               
                            </Row>
                        )}
                    <h1 className='alert-title'>Scheduled</h1> 
                    <hr className='alert-title'/>                    
                        {alert_list.filter((filtered) => (filtered.vehicle.miles_current + 500) < (filtered.log_miles + filtered.maintenance.maintenance_miles) ).map((e) =>
                            <Row>
                                <Alert variant="success" className='alert'>
                                    <Alert.Heading>{e.maintenance.maintenance_name}</Alert.Heading>
                                    <hr />
                                    <p className="mb-0">Due: {e.log_miles + e.maintenance.maintenance_miles}</p>
                                    <div className="d-flex justify-content-end">
                                        <Button variant="dark" onClick={(event) => handleSubmit(event, e.id)} >Complete</Button>
                                    </div>
                                </Alert>               
                            </Row>
                        )}                
            </>
        </Container> 
    );
};

export default AlertsPage;
