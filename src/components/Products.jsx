import { Product } from "./Product";

// имитация получения данных с сервера
const products = [
	{
		id: 1,
		title: "Кокосовая матча",
		image: "images/products/image-1.jpg",
		price: 390,
	},
	{
		id: 2,
		title: "Зеленый индонезийский чай",
		image: "images/products/image-2.jpg",
		price: 340,
	},
	{
		id: 3,
		title: "Черный чай из Эфиопии",
		image: "images/products/image-3.jpg",
		price: 380,
	},
	{
		id: 4,
		title: "Черный чай из Калифорнии",
		image: "images/products/image-4.jpg",
		price: 360,
	},
	{
		id: 5,
		title: "Органическая веганская матча",
		image: "images/products/image-5.jpg",
		price: 400,
	},
	{
		id: 6,
		title: "Чай черный Лакандона",
		image: "images/products/image-6.jpg",
		price: 390,
	},
];

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
