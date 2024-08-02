export const Product = ({ data }) => {
	// если линтер ругается на валидацию пропсов заходим в .eslintrc.cjs ==> rules ==> вставляем 'react/prop-types': 'off',
	// мы передаём пропс, а внутри него хранится data, поэтому мы диструктуризуруем пропс и получаем объект data
	return (
		<li className="products__item">
			<article className="product">
				<div className="product__image">
					<img src={data.image} alt={data.title} />
				</div>
				<div className="product__content">
					<h3 className="product__title">{data.title}</h3>
					<p className="product__price">{data.price} ₽</p>
				</div>
			</article>
		</li>
	);
};
