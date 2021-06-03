import {useState, useEffect} from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Products from '../../assets/Products';
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState(null);
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const task = new Promise ( resolve => {
            setLoader(true);
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });

        id ? task.then(res => {
            setDetalle(res.filter(p => p.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-') == id));
            setLoader(false);
        })
        : task.then(res => {
            setDetalle(res);
            setLoader(false);
        });
    }, [id]);

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