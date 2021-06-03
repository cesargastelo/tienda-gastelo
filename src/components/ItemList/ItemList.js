import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Products from '../../assets/Products';
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const { catId } = useParams();
    
    useEffect(() => {
        const task = new Promise ( resolve => {
            setLoader(true);
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });

        catId ? task.then(res => {
            setItems(res.filter(i => i.category.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-') === catId));
            setLoader(false);
        })
        : task.then(res => {
            setItems(res);
            setLoader(false);
        });
    }, [catId]);

    return (
        <div className="items-products">
            <>
            {loader && <Spinner animation="border" variant="primary" />}
            {!loader && items?.map((product) => 
                <Item
                    index={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.pictureUrl}
                />
            )}
            </>
        </div>
    )
}

export default ItemList;