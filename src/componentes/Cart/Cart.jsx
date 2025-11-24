import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";

import "./Cart.css";

export const Cart = () => {
    //implementamos el contexto del carrito
    const { cart, clearCart, deleteItem, total, subtotal, checkout } = useCartContext();
    // console.log(cart)

    return (
        <section id="carrito">
            <h1 className="titulo">Mi Carrito</h1>
            {/* <div className="mensajes">area de mensajes</div> */}
            <div id="itemsCarrito">

                {/* <!-- aca cargan los productos almacenados en el carrito--> */}
                {cart.length ? (
                    cart.map((prod) => (
                        <div className="prodCarrito" key={prod.id}>
                            <img src={prod.imageUrl} alt="" />
                            <div className="detalle">
                                <button id="eliminarProd" onClick={() => deleteItem(prod.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                                <p>{prod.title}</p>
                                <div className="agregar">
                                    <div className="amount">
                                        <span>Cantidad: {prod.quantity}</span>
                                    </div>
                                    <div>
                                        <p className="subtotal">${prod.price} c/u</p>
                                        <p className="precio">${subtotal(prod.id)}</p>
                                    </div>
                                </div>
                            </div>`

                        </div>
                    ))
                ) : (
                    <p>Tu carrito está vacío</p>
                )}

            </div>

            {/* //segunda parte el carrito con totales y finalizar compra / si no hay prod. solo muestra volver */}
            {cart.length ? (
                <div id="total">
                    <div className="total">
                        <p>TOTAL</p>
                        <p className="precio">${total()}</p>
                    </div>

                    <button className="comprar" id="finalizarCompra" onClick={checkout}>Comprar Ahora</button>
                    <div className="lastBtn">
                        <button className="vaciar" id="vaciar" onClick={clearCart}>Vaciar Carrito</button>
                        <Link className="btn" to="/">seguir Comprando</Link>
                    </div>
                </div>
            ) : (
                <Link className="btn" to="/">
                    Volver a la tienda
                </Link>
            )
            }
        </section >

    );
};