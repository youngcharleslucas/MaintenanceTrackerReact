import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./Home/home";
import Login from "./Login/login"
import "bootstrap/dist/css/bootstrap.min.css"


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
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default App;