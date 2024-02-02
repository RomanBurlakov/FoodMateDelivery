import { } from 'react'
import './Modal.css'

export default function ({ hideCart, children }) {
    return (
        <div className='modal' onClick={(e) => {
            if (e.target.classList.contains('modal')) {
                hideCart();
            }
        }}>
            {children}
        </div>
    )
}
