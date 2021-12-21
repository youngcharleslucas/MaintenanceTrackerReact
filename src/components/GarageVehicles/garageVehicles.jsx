import React, { useState, Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const GarageVehicles = (props) => {
    const [vehicles, setVehicles] = useState("");

    const getVehicles = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/operator_vehicle/garage/')
    };

    return (

    );
}