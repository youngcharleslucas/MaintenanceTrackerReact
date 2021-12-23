import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const MaintenanceLogList = (props) => {
    const [log_list, setMaintenanceLogList] = useState([]);

    const {vehicle_id} = useParams();
    // const {vehicle_type} = useParams();

    useEffect(() => {
        getMaintenanceLogList()
    }, [])

    const getMaintenanceLogList = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/maintenance_log/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setMaintenanceLogList(response.data)

    }
    return (
    
        <>
            <h1>Maintenance Log List</h1>
            <h2>{vehicle_id}</h2>
            {console.log(vehicle_id)}
            <CardGroup>
                <Row xs={1} md={1} className="g-4">
                    {log_list.filter((e) => e.vehicle == vehicle_id).map((filtered) => 
                        <Col>
                            <Card.Link href={`/maintenance_log/${filtered.id}`}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{filtered.log_title}</Card.Title>                        
                                    </Card.Body>
                                </Card>
                            </Card.Link>
                        </Col>
                    )}
                </Row>
            </CardGroup>
        </>
    );
        
}

export default MaintenanceLogList;