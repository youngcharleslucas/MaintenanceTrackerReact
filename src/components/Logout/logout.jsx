import React from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import './logout.css'

const Logout = () => {

    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    };

    return (
        <Container fluid className='container'>
            <Card className='special-card'>
                <Card.Body>
                    <Card.Title className='title'>Are you sure you want to log out?</Card.Title>
                    <Button className='button' variant='dark' onClick={() => window.location ='/'}>Return Home</Button>
                    <Button className='button' variant='dark' onClick={() => deleteToken()}>Logout</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Logout;