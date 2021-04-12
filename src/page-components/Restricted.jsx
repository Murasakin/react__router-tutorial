import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Redirect } from 'react-router';

function Restricted() {

    return (

        

        // <Card
        //     bg="light"
        //     text="dark"
        //     style={{ width: '75%', margin: '0 auto' }}
        //     className="mb-2"
        // >
        //     <Card.Header style={{textAlign: 'center'}}>Restricted</Card.Header>
        //     <Card.Body>
        //         <Card.Title style={{textAlign: 'center'}}>Restricted page </Card.Title>
        //         <Card.Text style={{textAlign: 'center'}}>
        //             You are in the Restricted page.
        //         </Card.Text>
        //     </Card.Body>
        // </Card>

        <Redirect to="/"></Redirect>     
    )
}

export default Restricted;