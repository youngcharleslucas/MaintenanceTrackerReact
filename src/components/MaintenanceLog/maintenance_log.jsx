import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './maintenance_log.css'

const MaintenanceLog = (props) => {
    const [log_info, setMaintenanceLog] = useState([]);

    const {log_id} = useParams();

    useEffect(() => {
        getMaintenanceLog()
    }, [])


// ******Lesson Learned******
// The errors I was getting for log_info.map not being a function was from the backend. I had made my request a .get not a .filter. Get only returns one object while
// filter returns an array. Mapping requires an array, so I changed the Django method back to .filter.
// I don't know why log_info.maintenance.maintenance_name was not working using .get. It would work after the page loaded, so comment it out, reload the page, uncomment it, save, reload then
// log_info.maintenance.maintenance_name and others like it would appear.
    const getMaintenanceLog = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/maintenance_log/vehicle/maintenance_item_log/${log_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setMaintenanceLog(response.data)
    };


    return (
    
      // I changed the Django method to a filter not a get. I think this made the response an array which could be mapped vs a dictionary.
        <Container fluid className="container">
            <>
                {/* <h1>Log</h1>
                <h2>{log_id}</h2> */}
                {console.log(log_info)}
                {/* <CardGroup> */}
                    {/* <Row xs={1} md={1} className="g-4">                   
                        <Col> */}
                        {log_info.map((e) =>
                            <Card className="special-card">
                                <Card.Body>
                                    <Card.Title>{e.maintenance.maintenance_name}</Card.Title> 
                                    <Card.Text>Description: {e.maintenance.maintenance_description} </Card.Text> 
                                    <Card.Text>Note: {e.log_note} </Card.Text>
                                    <Card.Text>Periodicity: {e.maintenance.maintenance_miles} </Card.Text>                                    
                                    <Card.Text>Miles: {e.log_miles} </Card.Text> 
                                    <Card.Text>Date: {e.log_date} </Card.Text> 
                                    <Card.Text>Editor: {e.operator.first_name} {e.operator.last_name}</Card.Text>                                                 
                                </Card.Body>
                            </Card>
                        )}
                        {/* </Col>                    
                    </Row> */}
                {/* </CardGroup> */}
            </>
        </Container>

        // Non mapping option is having mounting problems with the nested object keys like maintenance and operator object. Log object loads. Uncaught TypeError:Cannot read properties of undefined (reading 'maintenance_name')
        // <>
        //     <h1>Log</h1>
        //     <h2>{log_id}</h2>
        //     {console.log(log_info)}
        //     <CardGroup>
        //         <Row xs={1} md={1} className="g-4">                   
        //             <Col>
        //                 <Card >
        //                     <Card.Body>
        //                         <Card.Title>{log_info.maintenance.maintenance_name}</Card.Title> 
        //                         <Card.Text>Description: {log_info.maintenance.maintenance_description} </Card.Text> 
        //                         <Card.Text>Note: {log_info.log_note} </Card.Text>
        //                         <Card.Text>Periodicity: {log_info.maintenance.maintenance_miles} </Card.Text>                                    
        //                         <Card.Text>Miles: {log_info.log_miles} </Card.Text> 
        //                         <Card.Text>Date: {log_info.log_date} </Card.Text> 
        //                         <Card.Text>Editor: {log_info.operator.first_name} {log_info.operator.last_name}</Card.Text>                                                 
        //                     </Card.Body>
        //                 </Card>
        //             </Col>                    
        //         </Row>
        //     </CardGroup>
        // </>
    );
};

export default MaintenanceLog;