import { products } from "../products";
import { Product } from "./Product";



export const Products = () => {
	return (
		<section className="products">
			<div
				className="container products__container"
			>
				<h2 className="products__title section-title">Чай</h2>
				<ul className="products__list">
					{
						/* мы должны передавать ключ, который будет равен id элемента*/
						products.map((product) => (
							<Product key={product.id} data={product} />
						))
					}
				</ul>
			</div>
		</section>
	);
};
