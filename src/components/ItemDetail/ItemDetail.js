import { useState } from 'react';
import { BagCheckFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({index, title, description, price, img}) => {

    const cart = useCart();

    const [quantity, setQuantity] = useState();
    const [btnComprar, setBtnComprar] = useState(true);

    const addToCart = (quantity) => {
        if(quantity > 0){
            setQuantity(quantity);
            setBtnComprar(false);
        }else{
            setBtnComprar(true);
        }
    }

    const addNewProduct = (quantity) => {
        cart.addItem({name: title,price: price, amount: quantity});
    }

    console.log(cart);
    
    return (
        
            <div className="inner-product">
                <div className="detail-media">
                    <img src={img}/>
                </div>
                <div className="detail-info">
                    <h2>{title}</h2>
                    <h4>Precio: ${price}</h4>
                    <p>{description}</p>
                    { btnComprar ?
                    <ItemCount stock={5} initial={1} product={index} onConfirm={addToCart}/>
                    :
                    <button onClick={() => addNewProduct(quantity)} className="place_order"><BagCheckFill/> Comprar Ahora</button>
                    }
                </div>
            </div>
    )

}

export default ItemDetail;