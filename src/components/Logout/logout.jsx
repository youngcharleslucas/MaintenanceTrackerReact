import React from 'react';
import {Container, Card, Button} from 'react-bootstrap'

const Logout = () => {

    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    };

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Are you sure you want to log out?</Card.Title>
                    <Button onClick={() => window.location ='/'}>Return Home</Button>
                    <Button onClick={() => deleteToken()}>Logout</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Logout;