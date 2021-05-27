import Item from '../Item/Item';
import producto01 from "../../assets/images/producto-01.jpg";
import producto02 from "../../assets/images/producto-02.jpg";
import producto03 from "../../assets/images/producto-03.jpg";
import { useState, useEffect } from 'react';

const ItemList = ({onSearch}) => {
    const [products, setProduct] = useState(null);

    const Products = [
        {
            id: 1,
            title: 'Items A',
            description: 'this is a new product',
            price: '25.00',
            pictureUrl: producto01
        },
        {
            id: 2,
            title: 'Items B',
            description: 'this is a new product',
            price: '55.00',
            pictureUrl: producto02
        },
        {
            id: 3,
            title: 'Items C',
            description: 'this is a new product',
            price: '75.00',
            pictureUrl: producto03
        }
    ]
    useEffect(() => {
        const task = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });

        task.then(function (value) {
            setProduct(Products);
        });
    });

    return (
        <div className="items-products">
            <>
            {products?.map((product) => (
                <Item
                    index={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.pictureUrl}
                    onSearch={onSearch}
                />
            ))}
            </>
        </div>
    )
}

export default ItemList;