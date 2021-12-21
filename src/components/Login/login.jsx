import React, { useState, Component } from 'react';
import {Form, Button, Container} from "react-bootstrap";
import axios from 'axios';

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        postUser(userName, userPassword);
    };

    const postUser = async (name, password) => {
        let payload = {username: name, password: password};
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', payload);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/";
    };

    return(
    
        <div>
            <Container>
                <h1>Login</h1>
                {/* The function onFormSubmit() will automatically load when the page loads. To prevent this either use an arrow function or get rid of the () */}
                <Form onSubmit={onFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="userName" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="userPassword" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>    
        </div>
 
       
    );
}

export default Login;
