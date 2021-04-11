import React from 'react';
import { Card } from 'react-bootstrap';

function Home() {
    return (

        <Card
            bg="light"
            text="dark"
            style={{ width: '75%', margin: '0 auto' }}
            className="mb-2"
        >
            <Card.Header style={{textAlign: 'center'}}>Home</Card.Header>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Home page </Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    You are in the home page.
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Home;