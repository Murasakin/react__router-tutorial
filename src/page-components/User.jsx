import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

function User() {

    let { userId } = useParams();

    return (
        <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>{userId.charAt(0).toUpperCase() + userId.substring(1)}'s page</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
                You are on the page from user: {userId.charAt(0).toUpperCase() + userId.substring(1)}.
            </Card.Text>
        </Card.Body>

    )
}

export default User;