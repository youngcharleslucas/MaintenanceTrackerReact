import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const UpdateMiles = (props) => {
    const [miles, setUpdateMiles] = useState("");
    const [vehicle, setVehicle] = useState([]);

    const {vehicle_id} = useParams();
// miles_update was moved to handleSubmit because an error 'TypeError: Cannot read properties of undefined (reading 'vin')'
    // const miles_update = {
    //     vin: vehicle[0].vin,
    //     make: vehicle[0].make,
    //     model: vehicle[0].model,
    //     trim: vehicle[0].trim,
    //     drive_type: vehicle[0].drive_type,
    //     vehicle_type: vehicle[0].vehicle_type,
    //     miles_current: miles,
    // }

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
        e.preventDefault()
        const miles_update = {
            vin: vehicle[0].vin,
            make: vehicle[0].make,
            model: vehicle[0].model,
            trim: vehicle[0].trim,
            drive_type: vehicle[0].drive_type,
            vehicle_type: vehicle[0].vehicle_type,
            miles_current: miles,
        }
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
    );
}

export default UpdateMiles;