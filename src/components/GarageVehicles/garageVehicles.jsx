import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './garageVehicles.css'
// import Maintenance from '../Maintenance/maintenance';


const GarageVehicles = (props) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles()
    }, [])

    const getVehicles = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/operator_vehicle/garage/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicles(response.data)
    };

    return (
        <Container fluid className="container">
            <>
              {/* <Row > */}
            {/* Array did not work. It created duplicates of the mapped objects */}
              {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
                  {/* <Col> */}
                    {vehicles.map((e) =>
                        <Card className="special-card">
                            <Card.Img className="img-basic" variant="top" src="https://i.imgur.com/kdTpGzr.jpg" />
                            <Card.Body>
                                <Card.Title>{e.make} {e.model}</Card.Title>
                                {/* <Card.Text>{e.drive_type}</Card.Text> */}
                                <DropdownButton id="dropdown-basic-button" title="Options" variant="dark">
                                    <Dropdown.Item href={`/vehicle_information/${e.id}`}>Vehicle Information</Dropdown.Item>
                                    <Dropdown.Item href={`/update_miles/${e.id}`}>Update Miles</Dropdown.Item>
                                    <Dropdown.Item href={`/maintenance_log_list/${e.id}`}>Logs</Dropdown.Item>
                                    <Dropdown.Item href="/">Parts</Dropdown.Item>
                                    <Dropdown.Item href={`/maintenance/${e.vehicle_type}`} >Maintenance</Dropdown.Item>
                                    <Dropdown.Item href={`/alerts_list/${e.id}`}>Alerts</Dropdown.Item>
                                </DropdownButton>
                            </Card.Body>
                        </Card>
                    )}
                  {/* </Col> */}
              {/* ))} */}
              {/* </Row>     */}
            </>
        </Container>

    );
};

export default GarageVehicles;

// <Container fluid="sm">
// <>
//   <CardGroup>
//     {vehicles.map((e) =>
//         <Card style={{width: '30rem'}}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//                 <Card.Title>{e.make} {e.model}</Card.Title>
//                 {/* <Card.Text>{e.drive_type}</Card.Text> */}
//                 <DropdownButton id="dropdown-basic-button" title="Options">
//                     <Dropdown.Item href={`/vehicle_information/${e.id}`}>Vehicle Information</Dropdown.Item>
//                     <Dropdown.Item href={`/update_miles/${e.id}`}>Update Miles</Dropdown.Item>
//                     <Dropdown.Item href={`/maintenance_log_list/${e.id}`}>Logs</Dropdown.Item>
//                     <Dropdown.Item href="/">Parts</Dropdown.Item>
//                     <Dropdown.Item href={`/maintenance/${e.vehicle_type}`} >Maintenance</Dropdown.Item>
//                     <Dropdown.Item href={`/alerts_list/${e.id}`}>Alerts</Dropdown.Item>
//                 </DropdownButton>
//             </Card.Body>
//         </Card>
//     )}
//   </CardGroup>    
// </>
// </Container> */}