import { useState } from "react"
import "./Count.css"

 //onConfirm es una funcion que estoy pasando por props
export const Count = ({ onConfirm }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0))
    }

    //ACA TENDRIA QUE PONER LA LOGICA PARA CONTROLAR EL STOCK
    //pasa la cantidad a agregar al carrito
    const confirm = () => {
        if(count > 0) {
            onConfirm(count)
        }
    }

    return <div className="count-container">
        <div className="count-buttons">
            <button className="btn" onClick={decrement} disabled={count === 0}><i className="fa-solid fa-square-minus"></i></button>
            <span>{count}</span>
            <button className="btn" onClick={increment}><i className="fa-solid fa-square-plus"></i></button>
        </div>
         <button className="btn btn-add addcarrito" onClick={confirm} disabled={count === 0}><i className="fa-solid fa-cart-plus"></i></button>
    </div>
}