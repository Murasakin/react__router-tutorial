import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {

    const history = useHistory();

    const authValue = useContext(AuthContext);

    function login() {
        authValue.logIn(() => {history.replace("/restricted")});
    }

    return (
        <>
            <Alert variant="warning">
                <p style={{textAlign: 'center'}}>You must log in first before accessing the Restricted page.</p>
            </Alert>
            <Button style={{margin: '0 auto', width: '50%'}} block variant="success" onClick={() => {
                login()
            }}>Log in</Button>
        </>
    )
}

export default LoginPage;