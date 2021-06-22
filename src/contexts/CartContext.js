import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({ addItems: [], quantity: 0, total: 0});

    const addItem = (item) => {

        const result = cart.addItems.filter(p => p.index == item.index);
        const cantQuantity=(cart.quantity);
        const total=(cart.total);

        if(result.length == 0){
            setCart({ ...cart, addItems: [...cart.addItems, item], quantity:(cantQuantity+item.amount), total:(total+(item.price*item.amount))});
            console.log("Se añadio al carrito");
        }else{
            cart.addItems.forEach(
                function (elemento) {
                    if(elemento['index'] == item.index) {
                      elemento['amount'] = elemento['index'] == item.index ? elemento['amount']+item.amount : elemento['amount'];
                    }
                } 
            )
            setCart({addItems:cart.addItems,quantity:(cantQuantity+item.amount),total:(total+(item.price*item.amount))});
        }
    }

    const clear = () =>{
        setCart({ addItems : [],quantity:0, total:0})
        alert("Se vació el carrito de compra, sigue comprando.")
    }

    const removeItem = (itemId) =>{
        const item = cart.addItems.filter(p => p.index == itemId);
        const cantQuantity=(cart.quantity);
        const total=(cart.total);
        const result = cart.addItems.filter(p => p.index != itemId);
        setCart({addItems:result,quantity:parseInt(cantQuantity-item[0].amount),total:(total-(item[0].price*item[0].amount))});
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>{children}</CartContext.Provider>
    )
}