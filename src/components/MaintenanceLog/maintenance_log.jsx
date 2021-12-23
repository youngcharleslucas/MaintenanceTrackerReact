import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const MaintenanceLog = (props) => {
    const [log_info, setMaintenanceLog] = useState([]);

    const {log_id} = useParams();

    useEffect(() => {
        getMaintenanceLog()
    }, [])

    const getMaintenanceLog = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/maintenance_log/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setMaintenanceLog(response.data)

    }
    return (
    
        <>
            <h1>Log</h1>
            <h2>{log_id}</h2>
            {console.log(log_id)}
            <CardGroup>
                <Row xs={1} md={1} className="g-4">
                    {log_info.filter((e) => e.id == log_id).map((filtered) => 
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title>{filtered.log_title}</Card.Title> 
                                    <Card.Text>Miles: {filtered.log_miles} </Card.Text> 
                                    <Card.Text>Date: {filtered.log_date} </Card.Text> 
                                    <Card.Text>Editor: {filtered.operator} </Card.Text> 
                                    <Card.Text>Description: {filtered.log_description} </Card.Text>                
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </CardGroup>
        </>
    );
}

export default MaintenanceLog;