import { useCartContext } from "../../context/CartContext/UseCartContext";
export const BotonAddCarrito = (detail) => {
    const {addItem} = useCartContext()
    // console.log(detail)
    return (
        <>
        <button className="addcarrito" onClick={() => addItem(detail)}><i className="fa-solid fa-cart-plus"></i></button>
        </>
    )
}