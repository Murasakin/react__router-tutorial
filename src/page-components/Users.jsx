import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';
import User from './User';

function Users() {

    let match = useRouteMatch();



    return (

        <Card style={{ width: '75%', margin: '0 auto' }}>
            <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.url}/Daniel`} eventKey="/daniel">Daniel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.url}/Felipe`} eventKey="/felipe">Felipe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${match.url}/Ana`} eventKey="/ana">Ana</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                
                <Switch>
                    <Route path={`${match.path}/:userId`}>
                        <User />
                    </Route>
                    <Route path={`${match.path}`}>
                    <Card.Title style={{textAlign: 'center'}}>Users page</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                        Please select a user above.
                    </Card.Text>
                    </Route>
                </Switch>

            </Card.Body>
        </Card>

    )
}

export default Users;