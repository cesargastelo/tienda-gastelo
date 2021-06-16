import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({ addItems: [], quantity: 0});

    const addItem = (item) => {

        const result = cart.addItems.filter(p => p.index == item.index);
        const cantQuantity=(cart.quantity);

        if(result.length == 0){
            setCart({ ...cart, addItems: [...cart.addItems, item], quantity:(cart.addItems.length+1)});
            console.log("Se añadio al carrito");
        }else{
            cart.addItems.forEach(
                function (elemento) {
                    if(elemento['index'] == item.index) {
                      elemento['cant'] = elemento['index'] == item.index ? elemento['cant']+item.cant : elemento['cant'];
                    }
                } 
            )
            setCart({addItems:cart.addItems,quantity:(cantQuantity+item.cant)});
        }
    }

    const clear = () =>{
        setCart({ addItems : [],quantity:0})
        alert("Se vació el carrito de compra, sigue comprando.")
    }

    const removeItem = (itemId) =>{
        const item = cart.addItems.filter(p => p.index == itemId);
        const cantQuantity=(cart.quantity);
        const result = cart.addItems.filter(p => p.index != itemId);
        setCart({addItems:result,quantity:parseInt(cantQuantity-item[0].cant)});

    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>{children}</CartContext.Provider>
    )
}