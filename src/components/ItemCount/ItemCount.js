import {useState} from "react";
import {Plus, Dash, Cart4} from 'react-bootstrap-icons';
import ItemDetail from '../ItemDetail/ItemDetail';

import "./ItemCount.css";

const ItemCount = ({stock, initial, onConfirm}) => {

    const [counter, setCounter] = useState(initial);

    const onAdd = (value) => {
        setCounter(counter + value);
    };

    return (
        <div className="add-to-cart-panel">
            <div className="cart-counter">
                <button
                    disabled={counter == initial ? true : ""}
                    className="dash-btn"
                    onClick={()=> onAdd(-1)}
                >
                <Dash/>
                </button>
                {counter}
                <button
                    disabled={stock == counter ? true : ""}
                    className="add-btn"
                    onClick={()=> onAdd(1)}
                >
                <Plus/>
                </button>
            </div>
            <div className="cart-add-btn">
                <button className="add-list-btn" onClick={() => onConfirm(counter)}><Cart4 />Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;