import { useRef } from 'react'
import './message.css'

export default function Message() {
	const messageRef = useRef();

	return (
		<div className='message' onClick={() => messageRef.current.style.display = 'none'} ref={messageRef}>
			Спасибо за заказ, в ближайшее время мы с вами свяжимся!
		</div>
	)
}
