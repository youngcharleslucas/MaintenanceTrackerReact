import React, { Component } from 'react';
import GarageVehicles from '../GarageVehicles/garageVehicles'

const Home = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <GarageVehicles user= {props.user} />
        </div>
    );
};

export default Home;