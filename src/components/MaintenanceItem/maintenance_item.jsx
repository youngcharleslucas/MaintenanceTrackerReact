import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const MaintenanceItem = (props) => {
    const [maintenance_item, setMaintenanceItem] = useState([]);

    const {maintenance_id} = useParams();

    useEffect(() => {
        getMaintenanceItem()
    }, [])

    const getMaintenanceItem = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/maintenance_item/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setMaintenanceItem(response.data)

    }
    return (
    
        <>
            <h1>Maintenance Item</h1>
            <h2>{maintenance_id}</h2>
            {console.log(maintenance_item)}
            {console.log(maintenance_id)}
            <CardGroup>
                <Row xs={1} md={1} className="g-4">
                    {maintenance_item.filter((filtered) => filtered.id == maintenance_id).map((e) => 
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Title>{e.maintenance_name}</Card.Title> 
                                    <Card.Text>{e.maintenance_miles}</Card.Text> 
                                    <Card.Text>{e.maintenance_description}</Card.Text>                   
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </CardGroup>
        </>
    );
}

export default MaintenanceItem;