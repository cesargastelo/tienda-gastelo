import {Cart4} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

import './CartWidget.css';

const Cartwidget = () => {

    const cart = useCart();

    return (
        parseInt(cart.cart.quantity)>0
        ?
        <Link to="/car" className="nav-link d-inline-flex align-items-center nav-icon-cart">
            <Cart4 color="white" size={22} />{parseInt(cart.cart.quantity)}
        </Link>
        :
        <></>
    );
};

export default Cartwidget;