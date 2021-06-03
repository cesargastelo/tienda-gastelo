import {Cart4} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './CartWidget.css';

const Cartwidget = () => {
    return (
        <Link to="/cart" className="nav-link d-inline-flex align-items-center nav-icon-cart">
            <Cart4 color="white" size={22} />
        </Link>
    );
};

export default Cartwidget;