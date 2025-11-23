import { useState } from "react";
import { CartContext } from "./CartContex";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id)
        return exist
    }


    const addItem = (item) => {
        if (exists(item.id)) {
            // alert('El producto ya existe en el carrito')
            const updateCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }

            })
            // setCart([...cart, updateCart])
            setCart(updateCart)
            alert(`${item.name} CANT ACTUALIZADA`)
        } else {
            setCart([...cart, item])
            alert(`${item.name} PROD. agregado`)
        }
        // alert(`${item.name} agregado`)
    }

    //eliminar un producto del carrito
    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id)
        setCart(filtered)
        alert("producto eliminado")
    }


    const clearCart = () => {
        setCart([])
    }

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length
        }
    }

       //Calcular total
    const total = () => {      
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
        return Math.round(total * 100) / 100 //redondea a 2 decimales
    }

        //Calcular subTotales
       const subtotal = (id) => {    
        const  item = cart.find(c => c.id === id)
        const subtotal = item.count * item.price
        return Math.round(subtotal * 100) / 100 //redondea a 2 decimales
    }


    console.log(cart)
    
    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, subtotal }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}