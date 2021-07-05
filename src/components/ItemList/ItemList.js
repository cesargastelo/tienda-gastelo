import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Item from '../Item/Item';

import { getFirestore } from '../../firebase';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const { catId } = useParams();

    useEffect(() => {
        setLoader(true);
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        const docs = [];
        if(catId){
            const itemsFilter = itemsCollection.where('category','==',catId);
            itemsFilter.get().then((snapshot) => {
                if(snapshot.size === 0){
                    console.log('No resultados!');
                }
                snapshot.forEach((doc)=>{
                    docs.push({id:doc.id, ...doc.data()})
                })
                setItems(docs);
            }).finally(() => {
                setLoader(false);
            });
        }else{
            itemsCollection.get().then((snapshot) => {
                if(snapshot.size === 0){
                    console.log('No resultados!');
                }
                snapshot.forEach((doc)=>{
                    docs.push({id:doc.id, ...doc.data()})
                })
                setItems(docs);
            }).finally(() => {
                setLoader(false);
            });
        }

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