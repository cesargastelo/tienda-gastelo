import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { XCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase";
import Loading from "../Loading/Loading";

import './AddToCart.css';
import { Modal } from "react-bootstrap";

const AddToCart = () => {

    const [detalle, setDetalle] = useState(null);
    const [order,setOrder] = useState();
    const [lgShow, setLgShow] = useState(false);

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

    const prod = [];
    cart.cart.addItems.map(function(i) {
        prod.push({id: i.index, title: i.name, price: i.price, quantity: i.amount});
    });

    const uploadOrders = () => {
        const db = getFirestore();
        const ordersCollections = db.collection("orders");

        const newOrder = {
            buyer: { name: "Cesar", phone: "985645587", email: "cesar@gmail.com"},
            items: prod,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cart.cart.total
        }

        ordersCollections.add(newOrder).then(({id}) => {
            setOrder(id);
            setLgShow(true);
        })
    }

    return (
        <main>
            { 
            detalle? detalle.length>0
            ?
            <div className="container">
            <div className="btn-all-clear">
                <button className="btn btn-primary" onClick={cart.clear}>Limpiar artículos</button>
            </div>
            <div className="detail-cart">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>NOMBRE</th>
                                <th>PRECIO</th>
                                <th>CANTIDAD</th>
                                <th>SUBTOTAL</th>
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
                            <td>{x.price}</td>
                            <td>{x.amount}</td>
                            <td>{parseFloat(x.amount*x.price)}</td>
                        </tr>
                        ))}

                        <tr>
                            <th colSpan={4}><center>TOTAL</center></th>
                            <th colSpan={3}><center>{parseFloat(cart.cart.total)} USD</center></th>
                        </tr>

                        </tbody>
                </Table>
            </div>
            <div className="btn-checkout">
                <button className="btn btn-primary" onClick={uploadOrders}>Finalizar Compra</button>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Order Details
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID Orden: {order}</p>
                    <p>Pago Total: {cart.cart.total} USD</p>
                </Modal.Body>
            </Modal>
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