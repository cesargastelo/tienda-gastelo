import { useState } from 'react';
import { BagCheckFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({index, title, description, price, img, stock}) => {

    const cart = useCart();

    const [quantity, setQuantity] = useState(0);

    const addNewProduct = (quantity) => {
        setQuantity(quantity);
        cart.addItem({index: index,name: title,price: price, amount: quantity,image:img});
    }

    console.log(cart);
    
    return (
        
            <div className="inner-product" id={index}>
                <div className="detail-media">
                    <img src={img}/>
                </div>
                <div className="detail-info">
                    <h2>{title}</h2>
                    <h4>Precio: ${price}</h4>
                    <p>{description}</p>
                    { quantity == 0 ?
                    <ItemCount stock={stock} initial={1} product={index} addToCart={addNewProduct}/>
                    :
                    <Link to="/car" className="place_order"><BagCheckFill/> Comprar Ahora</Link>
                    }
                </div>
            </div>
    )

}

export default ItemDetail;