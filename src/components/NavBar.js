import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Cartwidget from './CartWidget';

import './styles/NavBar.css';

const Navbartop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">Tienda-Gastelo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{marginLeft: "auto"}}>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Category one</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Category two</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Category three</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Cartwidget />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbartop;