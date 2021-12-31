import React, { useState, useEffect } from 'react';
import {Alert, Container, Col, Row, Button} from 'react-bootstrap';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const AlertsPage = (props) => {
    const [alert_list, setAlertList] = useState([]);
    const {vehicle_id} = useParams();

    useEffect(() => {
        getAlertsList()
    }, [])

    const getAlertsList = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/incomplete/${vehicle_id}/`, {headers: {Authorization: 'Bearer '+ jwt}})
        console.log (response.data)
        setAlertList(response.data)
    };

    return (
        <>
            <h1>Alerts</h1>
            <h2>{vehicle_id}</h2>
            <Container>
                <Row> 
                    <h1>Overdue</h1>                   
                    {alert_list.map((e) =>
                        <Col>
                            <Alert variant="danger">
                                <Alert.Heading>{e.maintenance.maintenance_name}</Alert.Heading>
                                <hr />
                                <p className="mb-0">Due: {e.log_miles + e.maintenance.maintenance_miles}</p>
                                <div className="d-flex justify-content-end">
                                    <Button variant="danger">Complete</Button>
                                </div>
                            </Alert>               
                        </Col>
                    )}
                </Row>

            </Container>
        </>
    );
};

export default AlertsPage;
