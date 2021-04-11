import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
    return (
        
        <Card
            bg="light"
            text="dark"
            style={{ width: '75%', margin: '0 auto' }}
            className="mb-2"
        >
            <Card.Header style={{textAlign: 'center'}}>About</Card.Header>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>About page </Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    You are in the about page.
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default About;