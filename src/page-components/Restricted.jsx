import React, { useContext } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function Restricted() {

    const history = useHistory();

    const authValue = useContext(AuthContext);

    function logout() {
        authValue.logOut(() => {history.push("/?signedout")})
    }

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
        authValue.isLogged ? (
            <>
                <Alert variant="success">
                    <p style={{textAlign: 'center'}}>You are logged in as {authValue.userName}!</p>
                </Alert>
                <Button style={{margin: '0 auto', width: '50%'}} block variant="danger" onClick={() => {
                    logout()
                }}>Log out</Button>
            </>
        ) : (
            <Redirect to="/login"></Redirect>
        )
             
    )
}

export default Restricted;