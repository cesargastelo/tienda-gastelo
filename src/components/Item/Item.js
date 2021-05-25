import { Card, Button, CardColumns } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

import './Item.css';

const Item = ({index, title, description, price, img}) => {

    return (
        <CardColumns>
        <Card idproduct={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                <ItemCount stock={5} initial={1} />
            </Card.Body>
        </Card>
        </CardColumns>
    )
}

export default Item;