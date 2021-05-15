import {useState} from "react";
import {Alert} from "react-bootstrap";
import {Plus, Dash, Cart4} from 'react-bootstrap-icons';

import "./assets/ItemCount.css";

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(parseInt(initial));
    const [alert, setAlert] = useState(false);

    const itemAdd = () => {
        if(stock >= counter + 1){
            setCounter(counter + 1);
        }else{
            setAlert(true);
        }
    };

    const itemDelate =  () => {
        if(counter == 1){
            setCounter(counter);
        }else{
            setCounter(counter - 1);
            setAlert(false);
        }
    };

    return (
        <div className="add-to-cart-panel">
            <div className="cart-counter">
                <button className="dash-btn" onClick={()=> itemDelate()}><Dash/></button>
                {counter}
                <button className="add-btn" onClick={()=> itemAdd()}><Plus/></button>
            </div>
            <div className="cart-add-btn">
                <button className="add-list-btn"><Cart4 />Añadir al carrito</button>
            </div>
            <Alert variant="success" show={alert} className="alert-to-cart">No tenemos más productos en stock</Alert>
        </div>
    );
};

export default ItemCount;