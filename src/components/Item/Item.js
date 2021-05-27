import { Card, Button, CardColumns } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState } from 'react';

import './Item.css';

const Item = ({index, title, description, price, img, onSearch}) => {

    return (
        <Card idproduct={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                <Button variant="primary" onClick={() => onSearch(index)}>See Details</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;