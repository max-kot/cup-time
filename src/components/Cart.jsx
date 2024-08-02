import { products } from "../products";
import { CartItem } from "./CartItem";

export const Cart = () => {
	return (
		<section className="cart">
			<h2 className="section-title cart__title">Корзина (<span>6</span>)</h2>
			<ul className="cart__list">
				{products.map(product => <CartItem key={product.id} data={product}/>)}
			</ul>
		</section>
	);
}