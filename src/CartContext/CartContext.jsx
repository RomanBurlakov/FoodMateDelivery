import { createContext, useCallback, useState } from "react";

export const CartContext = createContext(null);
export const ChangeCartContext = createContext(null);

export default function CartContextPrivider({ children }) {
    const [cart, setCart] = useState([]);

    const changeCart = useCallback((meal, change) => {
        setCart(prevCart => {
            if (Array.isArray(meal) && meal.length === 0) {
                return []
            }
            let newCart = [...prevCart];
            const thisMeal = prevCart.find(e => e.meal === meal);
            if (thisMeal) {
                thisMeal.quantity += change;
                if (thisMeal.quantity < 1) {
                    newCart = newCart.filter(e => e.meal !== meal);
                }
            } else {
                newCart = [...prevCart, { meal, quantity: change }];
            }
            return newCart
        })
    }, [])

    return (
        <CartContext.Provider value={cart}>
            <ChangeCartContext.Provider value={changeCart}>
                {children}
            </ChangeCartContext.Provider>
        </CartContext.Provider>
    )
}
