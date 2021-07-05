import { useState } from "react";
import { Col, Row, Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase";

import './Checkout.css';

const inputs = [
    { label: "Nombre", type: "text", name: "nombre" },
    { label: "Apellido", type: "text", name: "apellido" },
    { label: "Teléfono", type: "text", name: "phone" },
    { label: "Correo electrónico", type: "email", name: "correo" },
    { label: "Repetir correo", type: "email", name: "correo2" }
];

const Checkout = () => {
    const [order, setOrder] = useState();
    const [lgShow, setLgShow] = useState(false);
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        phone: '',
        correo: '',
        correo2: ''
    });

    const cart = useCart();

    const handleInput = (e) => {
        setDatos({ ...datos, [e.target.name] : e.target.value });
    }

    const prod = [];
    cart.cart.addItems.map(function(i) {
        prod.push({id: i.index, title: i.name, price: i.price, quantity: i.amount});
    });

    const uploadOrders = () => {
        const db = getFirestore();
        const ordersCollections = db.collection("orders");

        const newOrder = {
            buyer: { name: datos.nombre, lastname: datos.apellido, email: datos.correo, phone: datos.phone},
            items: prod,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cart.cart.total
        }

        ordersCollections.add(newOrder).then(({id}) => {
            setOrder(id);
            setLgShow(true);
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(datos.correo === datos.correo2){
            uploadOrders();
        }else{
            alert('Los correos deben ser iguales.');
        }
    }

    return (
        <>
            { 
            prod? prod.length > 0 
            ? 
            <Form>
                <Row>
                    <Col sm={8}>
                        <h2>Información del Cliente</h2>
                        { inputs.map(({label, type, name}) => (
                            <Form.Group as={Col} controlId={name}>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control type={type} name={name} onChange={handleInput} placeholder={label} />
                            </Form.Group>
                        ))}
                    </Col>
                    <Col sm={4}>
                        <h2>Detalle del pedido</h2>
                        <div className="order-details">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart.cart.addItems.map((i)=> (
                                    <tr>
                                        <td>{i.name} x{i.amount}</td>
                                        <td>${parseFloat(i.amount*i.price)}</td>
                                    </tr>
                                ))}
                                    <tr>
                                        <th>Pago Total</th>
                                        <th>${cart.cart.total}</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="btn-order">
                            <Button
                                className="btn btn-primary"
                                onClick={onSubmit}
                                disabled={!(datos.nombre && datos.apellido && datos.phone && datos.correo && datos.correo2)}
                            >
                            Comprar Ahora
                            </Button>
                        </div>
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                <h4>¡Gracias por tu compra!</h4>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ID Orden</th>
                                            <th>Pago Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{order}</td>
                                            <td>${cart.cart.total}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <h5>Datos del Cliente:</h5>
                                <p>Nombre: {datos.nombre}</p>
                                <p>Apellido: {datos.apellido}</p>
                                <p>Correo: {datos.correo}</p>
                                <p>Teléfono: {datos.phone}</p>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Form>
            :
            <div className="notification-alert">
                <h1>Tu carrito de compras se encuentra vacio.</h1>
                <Link to={"/"} className="btn btn-primary">Ver Productos</Link>
            </div>
            : false
            }
        </>
    )
}

export default Checkout;