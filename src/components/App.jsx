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
                    <Routes>
                        <Route path="/" element={<Home user={user} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/maintenance/:vehicle_type" element={<Maintenance  />} />
                        <Route path="/maintenance_item/:maintenance_id" element={<MaintenanceItem  />} />
                        <Route path="/vehicle_information/:vehicle_id" element={<VehicleInfo  />} />
                        <Route path="/maintenance_log_list/:vehicle_id" element={<MaintenanceLogList  />} />
                        <Route path="/maintenance_log/:log_id" element={<MaintenanceLog  />} />
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default App;