import { useState } from 'react';
import { Bag, BagCheckFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({index, title, description, price, img}) => {

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
                    <Link to={"/cart/" + quantity} className="place_order"><BagCheckFill/> Comprar Ahora</Link>
                    }

                </div>
            </div>
    )

}

export default ItemDetail;