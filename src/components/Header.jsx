import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Router Tutorial</Navbar.Brand>

            <Nav className="mr-auto" >

                <Nav.Link as={Link} to="/" active={location.pathname == "/"}>
                    
                {/* Aqui podemos usar o Nav.Link do bootstrap como se fosse um Link do router-dom.
                Podemos, inclusive, passar as mesmas propriedades do Link para o Nav.Link e ele funciona normalmente.
                É possivel fazer a mesma coisa com qualquer outro componente customizado do react.
                Isso é feito através da propriedade "as" presente em muitos componentes do react-bootstrap*/}

                    Home
				</Nav.Link>

                <Nav.Link as={Link} to="/about" active={location.pathname == "/about"}>
                    About
				</Nav.Link>

                <Nav.Link as={Link} to="/users" active={location.pathname == "/users"}>
                    Users
				</Nav.Link>

            </Nav>

            <Button as={Link} to={"/restricted"} variant="outline-info">Restricted area</Button>

            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}

        </Navbar>
    );

}

export default Header;