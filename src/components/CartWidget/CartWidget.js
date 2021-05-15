import {Cart4} from 'react-bootstrap-icons';

import './assets/CartWidget.css';

const Cartwidget = () => {
    return (
        <a href='#cart' className="nav-link d-inline-flex align-items-center nav-icon-cart">
            <Cart4 color="white" size={22} />
        </a>
    );
};

export default Cartwidget;