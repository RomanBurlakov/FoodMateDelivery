import { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import { CartContext, ChangeCartContext } from '../CartContext/CartContext'

export default function Cart({ hideCart, changeOrder }) {
    const cart = useContext(CartContext);
    const changeCart = useContext(ChangeCartContext);

    return (
        <div className='cart'>
            <div className='cart-items'>
                {cart.length === 0 ? <h2 className='empty'>В корзине пусто...</h2> : cart.map((e) => {
                    return <CartItem {...e} changeCart={changeCart} key={e.meal.id} />
                })}
            </div>
            <div className="total">
                <span>Итого</span>
                <span>{cart.length === 0 ? 0 : cart.reduce((acc, e) => acc + e.meal.price * e.quantity, 0).toFixed(2)}₽</span>
            </div>
            <div className="buttons">
                <Button reverse={true} onClick={hideCart}>Закрыть</Button>
                <Button onClick={() => {
                    if (cart.length > 0) {
                        changeCart([]);
                        changeOrder();
                        hideCart();
                    }
                }}>Заказать</Button>
            </div>
        </div >
    )
}
