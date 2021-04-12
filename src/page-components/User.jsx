import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function User() {

    let { userId } = useParams();

    return (
        <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>{userId.charAt(0).toUpperCase() + userId.substring(1)}'s page</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
                You are on the page from user: {userId.charAt(0).toUpperCase() + userId.substring(1)}.
            </Card.Text>
            <Button as={Link} to={`/login?${userId}`}>Log in</Button>
        </Card.Body>

    )
}

export default User;