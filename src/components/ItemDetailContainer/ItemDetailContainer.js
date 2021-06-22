import {useState, useEffect} from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.css';

import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        const docs = [];
        itemsCollection.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                if(`${doc.data().title}` === id.replace(/-/g,' ').toUpperCase()){
                    docs.push({ id: doc.id,  ...doc.data()});
                }
            });
            setDetalle(docs);
        }).finally(() => {
            setLoader(false);
        });

    }, []);


    return (
        <main>
        <Container>
            <Row>
                <Col>
                    <div className="details-product">
                        {loader && <Spinner animation="border" variant="primary" />}
                        {!loader && detalle?.map((product2) => (
                            <ItemDetail
                                index={product2.id}
                                title={product2.title}
                                description={product2.description}
                                price={product2.price}
                                img={product2.pictureUrl}
                                stock={product2.stock}
                            />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        </main>
    )
}

export default ItemDetailContainer;