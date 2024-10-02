import { useContext } from "react";
import { CartContext } from "../Context/Cart";

export const useCart = () => {
    const cart = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart
}