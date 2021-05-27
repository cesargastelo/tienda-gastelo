import { Modal } from 'react-bootstrap';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';
import {useState} from 'react';

import './ItemListContainer.css';

const Itemlistcontainer = () => {

    const [detallePro,setDetallePro] = useState(null);
    const [lgShow, setLgShow] = useState(false);

    const onSearch = (id) => {
        setDetallePro(id);
        setTimeout(() => {
            setLgShow(true);
        }, 2000);
    }

    return (
        <main>
            <div style={{padding: "5vw 1vw"}}>
                <h1>¡Bienvenido a mi tienda!</h1>
                <ItemList onSearch={onSearch} />
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Product Details
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ItemDetailContainer idpro={detallePro} />
                    </Modal.Body>
                </Modal>
            </div>
        </main>
    )
}

export default Itemlistcontainer;