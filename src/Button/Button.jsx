import React from 'react'
import './Button.css'

export default function Button({ children, onClick, style, reverse, classes }) {
    classes += reverse ? ' button-reversed' : '';

    return (
        <button className={'button ' + classes} onClick={onClick} style={{ ...style }}>
            {children}
        </button>
    )
}
