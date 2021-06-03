import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="copyright">ECOMMERCE © 2021. TODOS LOS DERECHOS RESERVADOS</div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;