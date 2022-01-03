import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./maintenance_log_list.css"

const MaintenanceLogList = (props) => {
    const [log_list, setMaintenanceLogList] = useState([]);

    const {vehicle_id} = useParams();
    // const {vehicle_type} = useParams();

    useEffect(() => {
        getMaintenanceLogList()
    }, [])


    // const vehicleLogs = {
    //     // *1 converts string to integer
    //     id : vehicle_id * 1
    // };
    // const getMaintenanceLogList = async () => {
// THIS WILL NOT WORK!!!! CANNOT PASS A BODY THROUGH A GET REQUEST!!!!!!!!!!!!!
    //     const jwt = localStorage.getItem('token')
    //     let response = await axios.get('http://127.0.0.1:8000/api/maintenance_log/vehicle/', vehicleLogs, {headers: {Authorization: 'Bearer ' + jwt}})
    //     console.log(response.data)
    //     setMaintenanceLogList(response.data)
    // }
// AllowAny test because getting 401 error above. Postman works with IsAuth
// It is now giving 500 error, but postman still works
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
                {/* <h2>{vehicle_id}</h2> */}
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