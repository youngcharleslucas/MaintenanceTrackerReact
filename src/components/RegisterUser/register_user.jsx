import React, {useState} from 'react'
import axios from 'axios'
import {Form, Button, Container, FormLabel} from 'react-bootstrap'

const RegisterUser = () => {
    const [userName, setUserName] = useState ("");
    const [passWord, setPassWord] = useState ("");
    const [email, setEmail] = useState ("");
    const [fristName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [middleName, setMiddleName] = useState ("");
    const [role, setRole] = useState ("");

    const newUser = {
        username: userName,
        password: passWord,
        email: email,
        first_name: fristName,
        last_name: lastName,
        middle_name: middleName,
        role: role,
    };
   
    let handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser);
        console.log(response.data)
        if (response.request.status === 201) {
            alert('You are Registered! Please sign in.');
            return (window.location = '/login')
        }
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setUserName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassWord(e.target.value)}></Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLast">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setLastName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMiddle">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setMiddleName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" onChange={(e) => setRole(e.target.value)}></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>

    );

};

export default RegisterUser;