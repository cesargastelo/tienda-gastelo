import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({index, title, description, price, img}) => {

    return (
        
            <div className="inner-product">
                <div className="detail-media">
                    <img src={img}/>
                </div>
                <div className="detail-info">
                    <h2>{title}</h2>
                    <h4>Precio: ${price}</h4>
                    <p>{description}</p>
                    <ItemCount stock={5} initial={1} product={index} />
                </div>
            </div>
    )

}

export default ItemDetail;