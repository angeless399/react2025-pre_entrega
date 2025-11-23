import { useState } from "react";
import { CartContext } from "./CartContex";

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const exists = (id) => {
    const exist = cart.some((p) =>p.id === id)
    return exist
}


    const addItem = (item) => {
        if (exists(item.id)) {
            // alert('El producto ya existe en el carrito')
            // return
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }

            })
            setCart([...cart, updateCart])
            // alert(`${item.name} agregado`)
        } else {
            setCart([...cart, item])
            // alert(`${item.name} agregado`)
        }
        alert(`${item.name} agregado`)
    }


const clearCart = () => {
    setCart([])
}

const getTotalItems = () => {
    if(cart.length) {
        return cart.length
    }
}

const values = {cart, addItem, clearCart, getTotalItems}

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}