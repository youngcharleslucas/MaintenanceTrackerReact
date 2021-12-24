import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./Home/home";
import Login from "./Login/login"
import Maintenance from "./Maintenance/maintenance"
import MaintenanceItem from "./MaintenanceItem/maintenance_item"
import VehicleInfo from './VehicleInfo/vehicleInfo';
import "bootstrap/dist/css/bootstrap.min.css"
import MaintenanceLog from './MaintenanceLog/maintenance_log';
import MaintenanceLogList from './MaintenanceLogList/maintenance_log_list';
import RegisterUser from './RegisterUser/register_user';
import VehicleCreate from './VehicleCreate/vehicle_create';
import NavBar from './NavBar/navbar';
import GarageVehicles from './GarageVehicles/garageVehicles';
import Logout from './Logout/logout';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: '',
         };
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({
                user,
            });
        } catch {}
    }

    render() { 
        const user = this.state.user;
        return ( 
            <div>
                <Router>
                    <NavBar user = {user} />
                    <Routes>
                        <Route path="/" element={<Home user={user} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register_user" element={<RegisterUser />} />
                        <Route path="/maintenance/:vehicle_type" element={<Maintenance  />} />
                        <Route path="/maintenance_item/:maintenance_id" element={<MaintenanceItem  />} />
                        <Route path="/vehicle_information/:vehicle_id" element={<VehicleInfo  />} />
                        <Route path="/maintenance_log_list/:vehicle_id" element={<MaintenanceLogList  />} />
                        <Route path="/maintenance_log/:log_id" element={<MaintenanceLog  />} />
                        <Route path="/vehicle/create" element={<VehicleCreate />} />
                        <Route path="/garage" element={<GarageVehicles user={user}/>} />                        
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default App;