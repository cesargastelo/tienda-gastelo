import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({ addItems: [], quantity: 1});

    const addItem = (item) => {

        const result = cart.addItems.filter(p => p.index == item.index);

        if(result.length == 0){
            setCart({ ...cart, addItems: [...cart.addItems, item], quantity:(cart.addItems.length+1)});
            console.log("Se añadio al carrito");
        }else{
            console.log("Selecciona otro producto");
        }
    };

    return (
        <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>
    )
}