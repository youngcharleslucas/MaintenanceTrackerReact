import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./maintenance_log_list.css"

const MaintenanceLogList = (props) => {
    const [log_list, setMaintenanceLogList] = useState([]);

    const {vehicle_id} = useParams();

    useEffect(() => {
        getMaintenanceLogList()
    }, [])


// Aparently GET requests in Postman can include a body. THAT WILL NOT WORK FOR AXIOS!!!!

    const getMaintenanceLogList = async () => {
        const jwt = localStorage.getItem('token')
        // Forgetting the '/' at the end brought this error in browser console === Access to XMLHttpRequest at 'http://127.0.0.1:8000/api/maintenance_log/vehicle/1' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request.
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/log/${vehicle_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data['id'])
        setMaintenanceLogList(response.data)
    };

    return (
        <Container fluid className="container">   
            <>
                {/* <h1 color="white" >Maintenance Log List</h1> */}
                {/*  */}
                {/* <Button.Link onClick={() => window.location = `/maintenance_log_list/create_log/${vehicle_id}`} >Create Log</Button.Link> */}
                {/* <Button.Link href = {`/maintenance_log_list/create_log/${vehicle_id}`} >Create Log</Button.Link> */}
                <Card.Link href ={`/maintenance_log_list/create_log/${vehicle_id}`}>Return Home</Card.Link>
                <CardGroup>
                    <Row xs={1} md={1} className="g-4">
                        {log_list.map((e) => 
                            <Col>
                                <Card.Link className="link" href={`/maintenance_log/${e.id}`}>
                                    <Card className="special-card">
                                        <Card.Body>
                                            <Card.Title className="title">{e.maintenance.maintenance_name}</Card.Title>
                                            <Card.Text className="text">{e.log_miles}</Card.Text>                      
                                        </Card.Body>
                                    </Card>
                                </Card.Link>
                            </Col>
                        )}
                    </Row>
                </CardGroup>
            </>
        </Container> 
    );
        
}

export default MaintenanceLogList;