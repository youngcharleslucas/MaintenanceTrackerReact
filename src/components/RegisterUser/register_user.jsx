import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import './register_user.css'

const RegisterUser = () => {
    const [userName, setUserName] = useState ("");
    const [passWord, setPassWord] = useState ("");
    const [email, setEmail] = useState ("");
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [middleName, setMiddleName] = useState ("");
    const [role, setRole] = useState ("");

    const newUser = {
        username: userName,
        password: passWord,
        email: email,
        first_name: firstName,
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
        <Container fluid className='container'>
            <>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId="formBasicUserName">                        
                        <Form.Control className='space' style={{width:'300px'}} 
                            name="userName" 
                            // value="userName" 
                            type="text" 
                            onChange={(e) => setUserName(e.target.value)}>                                
                        </Form.Control>
                        <Form.Label className='label'>User Name</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className='space' style={{width:'300px'}} 
                            name="passWord" 
                            // value="passWord" 
                            type="password" 
                            onChange={(e) => setPassWord(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>Password</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">                        
                        <Form.Control className='space' style={{width:'300px'}} 
                            name="email" 
                            // value="email" 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>Email</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicFirst">                        
                        <Form.Control className='space' 
                            style={{width:'300px'}} 
                            name="firstName" 
                            // value="firstName" 
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>First Name</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicLast">                        
                        <Form.Control className='space' 
                            style={{width:'300px'}} 
                            name="lastName" 
                            // value={lastName} 
                            type="text" 
                            onChange={(e) => setLastName(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>Last Name</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicMiddle">                        
                        <Form.Control className='space' 
                            style={{width:'300px'}} 
                            name="middleName" 
                            // value="{middleName}" 
                            type="text" 
                            onChange={(e) => setMiddleName(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>Middle Name</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicRole">                        
                        <Form.Control className='space' 
                            style={{width:'300px'}} 
                            name="role" 
                            // value={{role}} 
                            type="text" 
                            onChange={(e) => setRole(e.target.value)}>                            
                        </Form.Control>
                        <Form.Label className='label'>Role</Form.Label>
                    </Form.Group>

                    <Button className='button' variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        </Container>
    );

};

export default RegisterUser;