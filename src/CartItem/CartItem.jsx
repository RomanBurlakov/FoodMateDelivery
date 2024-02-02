import { } from 'react'
import './CartItem.css'
import Button from '../Button/Button';

export default function CartItem({ meal, quantity, changeCart }) {
    return (
        <div className='cart-item'>
            <div className="cart-info">
                <h3>{meal.name}</h3>
                <div className='amount'>
                    <span className='cost'>{meal.price}₽</span>
                    <span className='qt'>x {quantity}</span>
                </div>
            </div>
            <div className="plus-minus">
                <Button reverse={true} style={{ width: '80px', borderRadius: '10px', fontSize: '40px' }} onClick={() => changeCart(meal, -1)}>-</Button>
                <Button reverse={true} style={{ width: '80px', borderRadius: '10px', fontSize: '40px' }} onClick={() => changeCart(meal, 1)}>+</Button>
            </div>
        </div>
    )
}
