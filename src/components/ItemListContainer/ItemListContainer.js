import { Col, Container, Row } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

const Itemlistcontainer = () => {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <ItemList />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Itemlistcontainer;