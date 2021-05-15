import './assets/ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const Itemlistcontainer = () => {
    return (
        <main>
            <div style={{padding: "6vw 1vw"}}>
                <h1>¡Bienvenido a mi tienda!</h1>
                <ItemCount stock="5" initial="1" />
            </div>
        </main>
    );
};

export default Itemlistcontainer;