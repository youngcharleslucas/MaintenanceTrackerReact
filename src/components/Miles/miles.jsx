import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const UpdateMiles = (props) => {
    const [miles, setUpdateMiles] = useState("");
    const [vehicle, setVehicle] = useState([]);
    // const [vin, setVIN] = useState ("");
    // const [make, setMake] = useState ("");
    // const [model, setModel] = useState ("");
    // const [trim, setTrim] = useState ("");
    // const [drive_type, setDriveType] = useState ("");
    // const [vehicle_type, setVehicleType] = useState ("");

    const {vehicle_id} = useParams();

    const miles_update = {
        vin: vehicle[0].vin,
        make: vehicle[0].make,
        model: vehicle[0].model,
        trim: vehicle[0].trim,
        drive_type: vehicle[0].drive_type,
        vehicle_type: vehicle[0].vehicle_type,
        miles_current: miles,
    }

    useEffect(() => {
        getVehicle()
    }, [])

    const getVehicle = async () => {
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/vehicle/get_vehicle/${vehicle_id}/`, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        setVehicle(response.data)
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token')
        let response = await axios.put(`http://127.0.0.1:8000/api/vehicle/update_miles/${vehicle_id}/`, miles_update, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
        if (response.request.status === 200) {
            return (window.location = '/garage')
        }
    };


    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            {console.log(vehicle)}
            {vehicle.map((e) =>
                <Form.Group className="mb-3" controlId="formBasicMiles">
                    <Form.Label>Update miles on {e.make} {e.model}</Form.Label>
                    <Form.Control type="text" placeholder={e.miles_current} onChange={(e) => setUpdateMiles(e.target.value)}></Form.Control>
                </Form.Group>
            )}
            <Button variant="primary" type="submit">Submit</Button>

        </Form>

// , setVIN(e.vin), setMake(e.make), setModel(e.model), setTrim(e.trim), setDriveType(e.drive_type), setVehicleType(e.vehicle_type)
        // <>
        //     <h1>Vehicle Info</h1>
        //     <h2>{vehicle_id}</h2>
        //     {console.log(vehicle_id)}
        //     <CardGroup>
        //         <Row xs={1} md={1} className="g-4">
        //             {miles.filter((e) => e.id == vehicle_id).map((filtered) => 
        //                 <Col>
        //                     <Card >
        //                         <Card.Body>
        //                             <Card.Title>Vehicle Information</Card.Title> 
        //                             <Card.Text>Make: {filtered.make} </Card.Text> 
        //                             <Card.Text>Model: {filtered.model} </Card.Text> 
        //                             <Card.Text>Trim: {filtered.trim} </Card.Text> 
        //                             <Card.Text>Drive Type: {filtered.drive_type} </Card.Text>  
        //                             <Card.Text>VIN: {filtered.vin} </Card.Text>                   
        //                         </Card.Body>
        //                     </Card>
        //                 </Col>
        //             )}
        //         </Row>
        //     </CardGroup>
        // </>
    );
}

export default UpdateMiles;