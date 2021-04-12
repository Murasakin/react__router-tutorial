import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function LoginPage({ userName }) {

    const history = useHistory();

    const authValue = useContext(AuthContext);

    function login(name) {
        authValue.logIn(name, () => {history.replace("/restricted")});
    }

    return (
        history.location.search === "?redirectRestricted" ? (
            <>
                <Alert variant="warning">
                    <p style={{textAlign: 'center'}}>You must log in first before accessing the Restricted page.</p>
                </Alert>
                <Button style={{margin: '0 auto', width: '50%'}} block variant="success" onClick={() => {
                    login(null)
                }}>Log in</Button>
            </>
        ) : (
            <>
                <Alert variant="secondary">
                    <p style={{textAlign: 'center'}}>You will be logged in as {`${history.location.search.substring(1)}`}.</p>
                </Alert>
                <Button style={{margin: '0 auto', width: '50%'}} block variant="success" onClick={() => {
                    login(history.location.search.substring(1))
                }}>Log in as {`${history.location.search.substring(1)}`}</Button>
            </>
        )
    )
}

export default LoginPage;