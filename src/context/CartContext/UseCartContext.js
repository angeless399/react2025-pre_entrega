import { useContext } from "react";
import { CartContext } from "./CartContex";

export const useCartContext = () => {
    return useContext(CartContext)
}
