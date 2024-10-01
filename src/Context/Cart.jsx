import { createContext } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            // 1h 19m y 45s
        }
    }

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
