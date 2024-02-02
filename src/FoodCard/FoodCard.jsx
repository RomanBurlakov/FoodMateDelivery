import { useContext, useRef } from 'react'
import './FoodCard.css'
import Button from '../Button/Button';
import { ChangeCartContext } from '../CartContext/CartContext'

export default function FoodCard({ data, animationDelay }) {
    const quantityRef = useRef();
    const changeCart = useContext(ChangeCartContext);
    return (
        <div className="card" style={{ 'animationDelay': animationDelay }}>
            <img src={data.image} alt={data.name} className='meal-image' />
            <div className="discripton">
                <h3>{data.name}</h3>
                <span>{data.price}₽</span>
            </div>
            <div className="add">
                <div className="quantity">
                    <label>Количество<input type="number" defaultValue={1} min={1} max={99} ref={quantityRef} onChange={(e) => {
                        if (e.target.value > +e.target.max) {
                            e.target.value = e.target.max;
                        }
                    }} /></label>
                </div>
                <Button style={{ width: '220px', height: '50px' }} onClick={() => {
                    changeCart(data, +quantityRef.current.value);
                    quantityRef.current.value = 1;
                }}>Добавить</Button>
            </div>
        </div>
    )
}
