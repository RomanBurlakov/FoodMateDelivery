import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Info from './Info/Info'
import Menu from './Menu/Menu'
import Modal from './Modal/Modal'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'
import CartContextPrivider from './CartContext/CartContext'
import Message from './Message/Message'

export default function App() {
	const [showCart, setShowCart] = useState(false);
	const [order, setOrder] = useState(false);

	function changeOrder() {
		if (!order) {
			setOrder(true);
			setTimeout(() => {
				setOrder(false);
			}, 4000)
		}
	}

	return (
		<CartContextPrivider>
			{showCart &&
				<Modal hideCart={() => setShowCart(false)}>
					<Cart hideCart={() => setShowCart(false)} changeOrder={changeOrder} />
				</Modal>}
			<Header showCart={() => setShowCart(true)} />
			<Info />
			<Menu />
			<Footer />
			{order && <Message />}
		</CartContextPrivider>
	)
}