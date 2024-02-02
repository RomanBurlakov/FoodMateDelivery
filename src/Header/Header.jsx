import { useContext, useEffect, useRef } from 'react'
import './Header.css'
import CartIcon from '../assets/cart-icon.svg'
import { CartContext } from '../CartContext/CartContext'

export default function Header({ showCart }) {
    const cart = useContext(CartContext);
    const cartRef = useRef();

    useEffect(() => {
        if (cart.length === 0) {
            return
        }
        cartRef.current.classList.add('pulse');
    }, [cart])
    // useEffect(() => {
    //     cartRef.current.classList.remove('pulse');
    // }, [])

    return (
        <header className='header'>
            <div className="header-container">
                <h1>FoodMate</h1>
                <button className='button header-button' ref={cartRef} onClick={showCart}
                    onAnimationEnd={() => cartRef.current.classList.remove('pulse')}>
                    <img src={CartIcon} alt="cart" />
                    <p>Корзина</p>
                    <div className='counter'>
                        {cart.reduce((acc, e) => acc + e.quantity, 0)}
                    </div>
                </button>
            </div>
        </header>
    )
}
