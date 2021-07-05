import {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

import './ItemDetailContainer.css';

import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error,setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        const item = itemsCollection.doc(id);
        const docs = [];
        item.get().then((doc) => {
            docs.push({ id: doc.id,  ...doc.data()});
            if(doc.exists){
                setDetalle(docs);
            }else{
                setError(<h3>Este producto no existe en la tienda.</h3>);
            }
        }).finally(() => {
            setLoader(false);
        });

    }, []);

    return (
        
        <div className="details-product">
            {loader && <Spinner animation="border" variant="primary" />}
            {!loader && detalle?.map((product2) => (
                <ItemDetail
                    index={product2.id}
                    title={product2.title}
                    description={product2.description}
                    price={product2.price}
                    img={product2.pictureUrl}
                    stock={product2.stock}
                />
            ))}
            {error}
        </div>
    )
}

export default ItemDetailContainer;