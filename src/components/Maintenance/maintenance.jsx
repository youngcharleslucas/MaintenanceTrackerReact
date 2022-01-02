import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Maintenance = (props) => {
    const [vehicle_maintenance, setVehicleMaintenance] = useState([]);

    const {vehicle_type} = useParams();
    // const {vehicle_type} = useParams();

    useEffect(() => {
        getVehicleMaintenance()
    }, [])

    const getVehicleMaintenance = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/maintenance_item/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicleMaintenance(response.data)

    }
    return (
    
        // <>
        //     <h1>Maintenance</h1>
        //     <h2>{vehicle_type}</h2>
        //     {console.log(vehicle_maintenance)}
        //     {console.log(vehicle_type)}
        //     <CardGroup>
        //         <Row xs={1} md={1} className="g-4">
        //             {vehicle_maintenance.filter((e) => e.vehicle_type[0] == vehicle_type).map((filtered) => 
        //                 <Col>
        //                     <Card>
        //                         <Card.Body>
        //                             <Card.Title>{filtered.maintenance_name}</Card.Title>                        
        //                         </Card.Body>
        //                     </Card>
        //                 </Col>
        //             )}
        //         </Row>
        //     </CardGroup>
        // </>
        <>
            <h1>Maintenance</h1>
            <h2>{vehicle_type}</h2>
            {console.log(vehicle_maintenance)}
            {console.log(vehicle_type)}
            <CardGroup>
                <Row xs={1} md={1} className="g-4">
                    {vehicle_maintenance.filter((filtered) => filtered.vehicle_type.id == vehicle_type).map((e) => 
                        <Col>
                            <Card.Link href={`/maintenance_item/${e.id}`}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{e.maintenance_name}</Card.Title>                        
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

export default Maintenance;