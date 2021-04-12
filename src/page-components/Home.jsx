import React, { useContext } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { useLocation } from 'react-router';

function Home() {

    const location = useLocation();

    return (

        location.search === "?signedout" ? (
            <>
                <Alert variant="danger">
                    You have logged out!
                </Alert>
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
            </>
        ) : (
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

        

    )
}

export default Home;