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
            <Card className='logout-card'>
                <Card.Body>
                    <Card.Title className='title-logout'>Are you sure you want to log out?</Card.Title>
                    <Button className='button-logout' variant='dark' onClick={() => window.location ='/'}>Return Home</Button>
                    <Button className='button-logout' variant='dark' onClick={() => deleteToken()}>Logout</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Logout;