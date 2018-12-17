import React, { Component } from 'react';
import Help from './Help'
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Surveyor</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <Help></Help>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;
