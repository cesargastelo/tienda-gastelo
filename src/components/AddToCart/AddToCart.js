import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { XCircle } from "react-bootstrap-icons";
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

        })
    })

    return (
        <div className="cart-content">
            { 
            detalle? detalle.length>0
            ?
            <>
            <div className="btn-all-clear">
                <button className="btn btn-primary" onClick={cart.clear}>Limpiar artículos</button>
            </div>
            <div className="detail-cart">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {detalle?.map((x) => (
                        <tr>
                            <td>
                                <button className="btn btn-danger btn-delete-item" onClick={()=>cart.removeItem(x.index)}><XCircle></XCircle></button>
                                <img src={x.image} width="60px" height="60px" />
                            </td>
                            <td>{x.name}</td>
                            <td>${x.price}</td>
                            <td>{x.amount}</td>
                            <td>${parseFloat(x.amount*x.price)}</td>
                        </tr>
                        ))}
                        </tbody>
                </Table>
            </div>
            <div className="cart-collaterals">
                <div className="cart_totals">
                    <h3>TOTAL DEL CARRITO</h3>
                    <Table bordered >
                        <tbody>
                            <tr>
                                <th>Subtotal</th>
                                <td>${cart.cart.total}</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>${cart.cart.total}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="proceed-to-checkout">
                        <Link to={"/checkout"} className="btn btn-primary">Finalizar Compra</Link>
                    </div>
                </div>
            </div>
            </>
            :
            <div className="shop-products">
                <h1>Tu carrito de compras se encuentra vacio.</h1>
                <Link to={"/"} className="btn btn-primary">Ver Productos</Link>
            </div>
            :
            <Loading />
            }
        </div>
            
    )
}

export default AddToCart;