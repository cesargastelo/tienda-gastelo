import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbartop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding: "8px 35px"}}>
            <Navbar.Brand href="#home">Tienda-Gastelo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{marginLeft: "auto"}}>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Category one</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Category two</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Category three</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbartop;