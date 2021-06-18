import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo2-ecommerce-app.png";
import Cartwidget from '../CartWidget/CartWidget';

import './NavBar.css';

const Navbartop = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link to="/" className="navbar-brand"><img src={logo} className="logo-main" alt="logo" /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{marginLeft: "auto"}}>
                    <Link to="/" className="nav-link">Home</Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <Link to="/category/aplicacion" className="dropdown-item">Software de Aplicacion</Link>
                        <Link to="/category/programacion" className="dropdown-item">Software de Programacion</Link>
                        <Link to="/category/sistema" className="dropdown-item">Software de Sistema</Link>
                    </NavDropdown>
                    <Link to="/nosotros" className="nav-link">Nosotros</Link>
                    <Cartwidget />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbartop;