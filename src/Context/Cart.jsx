import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }
    }
// 1h 26m 
    setCart(prevState => ([
        ...prevState,
        {
            ...product,
            quantity: 1
        }
    ]))

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            clearCart,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
