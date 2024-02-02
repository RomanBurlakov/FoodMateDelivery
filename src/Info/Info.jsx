import React from 'react'
import './Info.css'
import image from '/src/assets/kitchen-img.jpg'

export default function Info() {
    return (
        <div className='info-container'>
            <img src={image} alt="kitchens" className='info-img' />
            <div className="info">
                <h2>Онлайн ресторан FoodMate</h2>
                <p>
                    FoodMate - это онлайн ресторан, в котором лучшие национальные
                    блюда разных стран делает команда профессиональных поваров.
                </p>
                <p>
                    Быстрая работа и качественная продукция, а также самые настоящие
                    продукты придают хороший вкус блюдам, дарят наслаждение от трапезы.
                </p>
            </div>
        </div>
    )
}