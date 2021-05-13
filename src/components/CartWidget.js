import {Cart4} from 'react-bootstrap-icons';

const Cartwidget = () => {
    return (
        <a href='#cart' className="nav-link d-inline-flex align-items-center" style={{marginLeft: "15px"}}>
            <Cart4 color="white" size={22} />
        </a>
    );
};

export default Cartwidget;