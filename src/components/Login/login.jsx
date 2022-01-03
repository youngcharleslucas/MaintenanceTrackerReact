import React, { useState, Component } from 'react';
import {Form, Button, Container} from "react-bootstrap";
import axios from 'axios';
import './login.css'

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
            <Container align="center" fluid className='container'>
                <>
                    {/* <h1>Login</h1> */}
                    {/* The function onFormSubmit() will automatically load when the page loads. To prevent this either use an arrow function or get rid of the () */}
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group controlId="formBasicUsername">                        
                            <Form.Control style={{width:"300px"}} type="text" name="userName" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <Form.Label className='label'>Username</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">                        
                            <Form.Control style={{width:"300px"}} type="password" name="userPassword" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                            <Form.Label className='label'>Password</Form.Label>
                        </Form.Group>

                        <Button className='button' variant="dark" type="submit">Submit</Button>
                    </Form>
                </>
            </Container>    
        </div>
 
       
    );
}

export default Login;
