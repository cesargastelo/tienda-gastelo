import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Item.css';

const Item = ({index, title, price, img}) => {

    const slugId = index;

    return (
        <Card idproduct={index}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                <Link to={"/item/" + slugId} className="btn btn-primary">Ver detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default Item;