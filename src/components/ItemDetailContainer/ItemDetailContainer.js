import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import producto01 from '../../assets/images/producto-01.jpg';
import producto02 from '../../assets/images/producto-02.jpg';
import producto03 from '../../assets/images/producto-03.jpg';

const ItemDetailContainer = ({idpro}) => {
    const [detalle, setDetalle] = useState(null);

    const Products2 = [
        {
            id: 1,
            title: 'Items A',
            description: 'Programs that allow the user to have control over the computer and give support to other programs.',
            price: '25.00',
            pictureUrl: producto01
        },
        {
            id: 2,
            title: 'Items B',
            description: 'Programs that allow the user to have control over the computer and give support to other programs.',
            price: '55.00',
            pictureUrl: producto02
        },
        {
            id: 3,
            title: 'Items C',
            description: 'Programs that allow the user to have control over the computer and give support to other programs.',
            price: '75.00',
            pictureUrl: producto03
        }
    ]

    useEffect(() => {
        const task = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products2);
            }, 1000);
        });

        task.then(function (value) {
            const result = Products2.filter(pro => pro.id == idpro);
            setDetalle(result);
        });
    });

    return (
        <div style={{padding: "3vw 1vw"}}>
            {detalle?.map((product2) => (
            <ItemDetail
                index={product2.id}
                title={product2.title}
                description={product2.description}
                price={product2.price}
                img={product2.pictureUrl}
            />
            ))}
        </div>
    )
}

export default ItemDetailContainer;