import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({index, title, description, price, img}) => {

    return (
        <div className="detail-product">
            <img src={img}/>
            <h2>{title}</h2>
            <h4>Price: ${price}</h4>
            <p>{description}</p>
            <ItemCount stock={5} initial={1} product={index} />
        </div>
    )

}

export default ItemDetail;