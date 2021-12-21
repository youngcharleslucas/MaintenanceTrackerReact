import React, { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Maintenance = (props) => {

    const {vehicle_Id} = useParams();

    return (
        <><h1>Maintenance</h1>
        <h2>{vehicle_Id}</h2></>
    );
}

export default Maintenance;