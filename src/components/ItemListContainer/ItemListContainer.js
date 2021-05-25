import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

const Itemlistcontainer = () => {
    return (
        <main>
            <div style={{padding: "5vw 1vw"}}>
                <h1>¡Bienvenido a mi tienda!</h1>
                <ItemList />
            </div>
        </main>
    );
};

export default Itemlistcontainer;