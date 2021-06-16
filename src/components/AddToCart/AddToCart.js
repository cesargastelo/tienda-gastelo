import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Loading from "../Loading/Loading";

import './AddToCart.css';

const AddToCart = () => {

    const [detalle, setDetalle] = useState(null);

    const cart = useCart();

    useEffect(() => {
        const promise = new Promise ( resolve => {
            setTimeout(() => {
                resolve(cart);
            }, 1000);
        });
        
        cart ? promise.then(result => {
            setDetalle(result.cart.addItems);
        })
        : promise.then(result =>{
            /*setDetalle(result);*/
        })
    })

    return (
        <main>
            { 
            detalle? detalle.length>0
            ?
            <div className="container">
            <div className="detail-cart">
                <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>IDPRODUCTO</th>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                                <th>TOTAL</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                        {detalle?.map((x) => (
                        <tr>
                            <td>{x.index}</td>
                            <td>{x.name}</td>
                            <td>{x.amount}</td>
                            <td>{x.price}</td>
                            <td>{parseFloat(x.amount*x.price)}</td>
                            <td><button className="btn btn-danger" onClick={()=>cart.removeItem(x.index)}>Eliminar</button></td>
                        </tr>
                        ))}

                        </tbody>
                </table>
            </div>
            <div className="btn-all-clear">
                <button className="btn btn-primary" onClick={cart.clear}>Limpiar artículos</button>
            </div>
            </div>
            :
            <div className="shop-products">
                <h1>Tu carrito de compras se encuentra vacio.</h1>
                <Link to={"/"} className="btn btn-primary">Ver Productos</Link>
            </div>
            :
            <Loading />
            }
        </main>
            
    )
}

export default AddToCart;